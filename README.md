
# 📦 Inventory Management System – Backend API

A backend RESTful API for managing products and user authentication in an inventory system. Built with **Node.js**, **Express**, **MongoDB**, and **Docker**.

---

## 🚀 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Swagger for API Docs
- Docker & Docker Compose
- Postman for testing

---

## ⚙️ Setup Instructions (Without Docker)

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

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/inventory_db
JWT_SECRET=your_jwt_secret_key
```

---

## 🐳 Docker Setup

### 🛠️ 1. Build and Run Containers

From the root of your project (where `docker-compose.yml` is):

```bash
docker-compose up --build
```

### 🔗 Access the App

- Backend API: [http://localhost:5000](http://localhost:5000)
- Swagger UI: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

> If you want Swagger on root (`/`), it can be mapped in `server.js` (see below).

---

## 🔐 Authentication Endpoints

- `POST /api/signup` — Register a user  
- `POST /api/login` — Login & get JWT  

> Use the token in the `Authorization` header for all protected routes:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📦 Product Routes (Protected)

| Method | Endpoint                          | Description                 |
|--------|-----------------------------------|-----------------------------|
| POST   | `/api/products`                   | Add a new product           |
| PUT    | `/api/products/:id/quantity`      | Update product quantity     |
| GET    | `/api/products?page=1`            | Get paginated product list |

---

## 📘 API Documentation (Swagger)

- **URL**: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

> To move Swagger UI to root (`/`), update `server.js`:

```js
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

---

## 🧪 API Testing with Python

```bash
pip install requests
python test_api.py
```

---

## 📮 Postman Collection

Import the included `inventory-management-collection.postman_collection.json` into Postman for quick testing.

---

## 🗂 Project Structure

```
inventory-backend/
│
├── controllers/         # Route handlers
├── routes/              # API routes
├── models/              # Mongoose schemas
├── config/              # DB connection
├── middleware/          # Auth middleware
├── swagger.js           # Swagger setup
├── server.js            # Entry point
├── Dockerfile           # Docker build config
├── docker-compose.yml   # Container orchestration
├── .env                 # Environment variables
└── README.md            # Docs
```

---

## 🐙 Sharing the Dockerized Project

Just share your GitHub repo link.

> Ensure it contains:
- `Dockerfile` in root
- `docker-compose.yml`
- All code and `.env.example` (without secrets)

---

## ✨ Author

Built by **Gaurav Jaiswal**  
For the **Fi Internship Backend Assignment**
