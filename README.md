# Trendgy

Trendgy is an online clothing store built using **React** for the frontend, with **Express.js** and **MongoDB** for the backend and database. The platform provides a seamless shopping experience with a modern UI and secure authentication.

## 🚀 Features
- User authentication (Signup/Login)
- Product catalog with dynamic filtering
- Shopping cart functionality
- Order management system
- Secure payment integration (future update)
- Responsive and optimized UI

## 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- React Router
- Axios (for API requests)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication

## ⚙️ Installation
### Clone the repository
```sh
git clone https://github.com/mdjamikhan/Trendgy.git
cd Trendgy
```

### Install dependencies
#### Frontend
```sh
cd client
npm install
```

#### Backend
```sh
cd server
npm install
```

### Start the development server
#### Run Backend
```sh
cd server
npm start
```

#### Run Frontend
```sh
cd client
npm start
```

## 📌 Environment Variables
Create a `.env` file in the `server` directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
PORT=9000
```

## 📜 API Routes
### Authentication
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → User login
- `GET /api/auth/user` → Get user details



## 📷 Screenshots
![Homepage](assets/Screenshot(4).png)





## 🌐 Live Demo
(Include deployment link if available)

