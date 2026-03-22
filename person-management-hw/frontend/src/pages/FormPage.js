import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email) {
      alert("Tüm alanları doldur");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/people", {
        full_name: fullName,
        email: email,
      });

      alert("Kayıt başarılı ✅");
      setFullName("");
      setEmail("");

    } catch (err) {
      alert("Hata oluştu ❌");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Kişi Ekle</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Ekle</button>
      </form>

      <button onClick={() => navigate("/people")}>
        Listeye Git
      </button>
    </div>
  );
}

export default FormPage;