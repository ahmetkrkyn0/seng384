# 🚀 Person Management System (Full-Stack + Docker)

## 📌 Project Description

This project is a full-stack web application developed as part of a Web Development assignment.

The application allows users to manage people records with full CRUD functionality:

* Create new person
* Read all people
* Update existing person
* Delete person

The system is built using:

* **Frontend:** React
* **Backend:** Node.js (Express)
* **Database:** PostgreSQL
* **Containerization:** Docker & Docker Compose

---

## 🏗️ Architecture

React (Frontend) → Express API (Backend) → PostgreSQL (Database)

All services are containerized and run together using Docker Compose.

---

## 🛠️ Technologies Used

* React
* Node.js
* Express.js
* PostgreSQL
* Docker
* Docker Compose
* Axios

---

## 📂 Project Structure

```
project-root/
│
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── Dockerfile (optional)
│   ├── src/
│   └── package.json
│
├── db/
│   └── init.sql
```

---

## ⚙️ Setup & Run

### 🔥 Run the entire project with one command:

```bash
docker compose up --build
```

---

## 🌐 Access Points

* Frontend: http://localhost:3001
* Backend API: http://localhost:5000

---

## 📡 API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/people     | Get all people    |
| GET    | /api/people/:id | Get single person |
| POST   | /api/people     | Create new person |
| PUT    | /api/people/:id | Update person     |
| DELETE | /api/people/:id | Delete person     |

---

## 🧪 Example Request

### POST /api/people

```json
{
  "full_name": "Ahmet Karakoyun",
  "email": "ahmet@test.com"
}
```

---

## 🗄️ Database

Table: **people**

| Field     | Type    | Constraint       |
| --------- | ------- | ---------------- |
| id        | SERIAL  | Primary Key      |
| full_name | VARCHAR | NOT NULL         |
| email     | VARCHAR | UNIQUE, NOT NULL |

---

## 📸 Screenshots

* Form Page (Add Person)
* List Page (View People)
* CRUD Operations

(Add screenshots here)

---

## 🎯 Features

* Full CRUD operations
* RESTful API
* Client-side validation
* Server-side validation
* Dockerized environment
* Clean project structure

---

## 📚 Learning Outcomes

* Full-stack development
* REST API design
* Database integration
* Docker containerization
* Frontend-backend communication

---

## 👨‍💻 Author

Ahmet Karakoyun
