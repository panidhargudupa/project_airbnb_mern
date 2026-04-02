# 🏡 StayNest — Vacation Rental Booking Platform

StayNest is a **full-stack vacation rental booking platform** inspired by Airbnb, built to provide users with a seamless experience for browsing, creating, managing, and reviewing vacation rental listings.

The project is built using **Node.js, Express.js, MongoDB, EJS, Bootstrap, Cloudinary, and Mapbox**, following the **MVC architecture pattern**.

---

## 🚀 Live Demo
🔗 https://staynest-booking.onrender.com/

---

## 📂 GitHub Repository
🔗 https://github.com/panidhargudupa/staynest-vacation-rental-booking-platform

---

## ✨ Features

- 🔐 User Authentication & Authorization
- 🏠 Create, Read, Update, Delete Listings
- ☁️ Cloudinary Image Upload
- 🗺️ Interactive Maps with Mapbox
- ⭐ Reviews & Ratings System
- 🔒 Protected Routes
- 🧾 Session Management
- ⚠️ Flash Messages
- ✅ Server-side Validation using Joi
- 👤 Owner-based Authorization
- 🧱 MVC Architecture
- 📱 Responsive UI using Bootstrap 5

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session
- Connect Flash
- Joi
- Multer
- Cloudinary
- Mapbox SDK
- Method Override
- Dotenv

### Frontend
- EJS
- EJS-Mate
- Bootstrap 5
- Font Awesome
- Mapbox GL JS

### Cloud & Deployment
- Render
- MongoDB Atlas
- Cloudinary
- Mapbox

---

## 🏗️ Project Architecture (MVC)

```bash
StayNest/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── middleware/
│   └── index.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── partials/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── seeds/
├── cloudConfig.js
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/panidhargudupa/staynest-vacation-rental-booking-platform.git
cd staynest-vacation-rental-booking-platform
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root folder and add:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_public_token
```

---

### 4️⃣ Run the Application

```bash
npm start
```

---

### 5️⃣ Open in Browser

```bash
http://localhost:3000
```

---

## 🌐 Application Routes

### 🏠 Listings Routes

```http
GET    /listings
GET    /listings/new
POST   /listings
GET    /listings/:id
GET    /listings/:id/edit
PUT    /listings/:id
DELETE /listings/:id
```

---

### ⭐ Review Routes

```http
POST   /listings/:id/reviews
DELETE /listings/:id/reviews/:reviewId
```

---

### 👤 User Routes

```http
GET    /register
POST   /register
GET    /login
POST   /login
GET    /logout
```

---

## 🔐 Authentication & Authorization

StayNest uses **Passport.js** for secure user authentication.

### Authentication
- User registration
- User login
- User logout
- Session-based authentication

### Authorization
- Only listing owners can edit/delete listings
- Only review authors can delete reviews
- Protected routes for logged-in users

---

## 📦 Key Packages Used

```json
{
  "express": "^4.x",
  "mongoose": "^8.x",
  "passport": "^0.x",
  "passport-local": "^1.x",
  "passport-local-mongoose": "^8.x",
  "joi": "^17.x",
  "multer": "^1.x",
  "cloudinary": "^2.x",
  "@mapbox/mapbox-sdk": "^0.x"
}
```

---

## 🧠 Key Learnings from Project

- Full-stack web development
- RESTful routing
- MVC architecture
- Authentication & authorization
- MongoDB relationships
- Middleware & validation
- Cloud storage integration
- Maps & geolocation
- Deployment on Render
- Real-world project structure

---

## 🚀 Future Enhancements

- 💳 Payment gateway integration
- 📅 Booking system
- ❤️ Wishlist / favorites
- 🔍 Advanced filters
- 👨‍💼 Admin dashboard
- 📊 Analytics panel
- 📱 Better mobile optimization

---

## 🖼️ Screenshots

_Add screenshots here_

Example:

```md
![Home Page](./screenshots/homepage.png)
![Listing Details](./screenshots/listing.png)
```

---

## 👨‍💻 Author

**Pani Dhar Gudupa**

📌 MCA Final Year | Full Stack Developer  
🔗 GitHub: https://github.com/panidhargudupa

---

## 📄 License

This project is created for **learning and portfolio purposes**.
