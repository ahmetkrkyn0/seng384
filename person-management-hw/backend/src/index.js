const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// TEST
app.get("/", (req, res) => {
  res.send("API çalışıyor 🚀");
});


// 👉 CREATE (POST)
app.post("/api/people", async (req, res) => {
  const { full_name, email } = req.body;

  // VALIDATION
  if (!full_name || !email) {
    return res.status(400).json({ error: "MISSING_FIELDS" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO people (full_name, email) VALUES ($1, $2) RETURNING *",
      [full_name, email]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    if (err.code === "23505") {
      // unique violation
      return res.status(409).json({ error: "EMAIL_ALREADY_EXISTS" });
    }

    console.error(err);
    res.status(500).json({ error: "SERVER_ERROR" });
  }
});

app.listen(5000, () => {
  console.log("Server 5000 portunda çalışıyor");
});

// GET ALL
app.get("/api/people", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM people");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "SERVER_ERROR" });
  }
});