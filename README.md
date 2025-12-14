# Sweet Shop Management System 🍬

The Sweet Shop Management System is a full-stack web application designed to manage sweets inventory and purchases. Users can register, log in, view available sweets, and purchase them. Admin users can manage sweets by adding, updating, deleting, and restocking inventory.

This project demonstrates real-world full-stack development including authentication, authorization, REST APIs, database integration, and frontend–backend communication.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios
- HTML, CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Tools
- Git & GitHub
- Nodemon
- Postman / Thunder Client

---

## ✨ Features

### User Features
- User registration and login
- JWT-based authentication
- View sweets list
- Purchase sweets
- Purchase disabled when stock is zero

### Admin Features
- Add new sweets
- Update sweet details
- Delete sweets
- Restock sweets
- Role-based access control

---

## 📂 Project Structure

### Backend
sweet-shop-backend/
├── config/
├── middleware/
├── models/
├── routes/
├── server.js
└── .env

### Frontend
sweet-shop-frontend/
├── src/
│ ├── api/
│ ├── pages/
│ ├── components/
│ ├── App.jsx
│ └── main.jsx


---

## ⚙️ Setup Instructions (Local)

### 🔹 Prerequisites
- Node.js (v16 or above)
- MongoDB (local or MongoDB Atlas)
- Git

---

### 🔹 Backend Setup

```bash
cd sweet-shop-backend
npm install
npx nodemon server.js

Backend runs on:
http://localhost:5000

Frontend Setup
cd sweet-shop-frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

Authentication Flow
User registers with email and password
Password is hashed and stored in MongoDB
User logs in
Backend generates JWT token
Token stored in browser (localStorage)
Token sent in Authorization header
Backend verifies token for protected APIs

API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login
Sweets
GET /api/sweets
POST /api/sweets (Admin)
PUT /api/sweets/:id (Admin)
DELETE /api/sweets/:id (Admin)
Inventory
POST /api/sweets/:id/purchase
POST /api/sweets/:id/restock (Admin)