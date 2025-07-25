# 📦 Inventory Management System – Backend API

This project is a backend RESTful API for managing products and user authentication in an inventory system. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Swagger for API Documentation
- Postman for testing

---

## ⚙️ Setup Instructions

### 📁 1. Clone the Repository

```bash
git clone <your-repo-url>
cd inventory-backend
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🔑 3. Create `.env` File

In the root directory, create a `.env` file with the following contents:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/inventory_db
JWT_SECRET=your_jwt_secret_key
```

> Replace `<username>`, `<password>`, and `<cluster>` with your MongoDB Atlas credentials.

---

## 🧪 Running the Server

```bash
npm start
```

Server will run at:  
📍 `http://localhost:5000`

---

## 🔐 Authentication

- `POST /api/signup` — Register a user
- `POST /api/login` — Login with username and password  
  ✅ Returns a JWT token to use in Authorization headers for protected routes.

---

## 📦 Products API (Protected)

| Method | Endpoint                          | Description                 |
|--------|-----------------------------------|-----------------------------|
| POST   | `/api/products`                   | Add a new product           |
| PUT    | `/api/products/:id/quantity`      | Update product quantity     |
| GET    | `/api/products?page=1`            | Get paginated product list |

> Add this header for all protected routes:
```
Authorization: Bearer <your_jwt_token>
```

---

## 📮 API Documentation (Swagger)

Swagger UI is available at:

📍 `http://localhost:5000/api-docs`

Includes detailed OpenAPI documentation and test forms.

---

## 🧪 Automated API Testing (Optional)

A Python script is provided to test the entire API flow.

### Prerequisites:
- Python 3.6+
- `requests` library

### Run:

```bash
pip install requests
python test_api.py
```

---

## 🔬 Postman Collection

A Postman collection (`inventory-management-collection.postman_collection.json`) is included to test:

- Signup
- Login
- Add Product
- Update Quantity
- Get Products

You can import it directly into Postman.

---

## 📁 Project Structure

```
inventory-backend/
│
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── middleware/         # JWT auth middleware
├── config/             # DB config
├── swagger.js          # Swagger/OpenAPI config
├── test_api.py         # Python test script
├── .env                # Environment variables
├── README.md           # Setup docs
├── server.js           # Entry point
```

---

## ✨ Author

Made with 💻 by Gaurav Jaiswal
For the Fi Internship Backend Assignment.