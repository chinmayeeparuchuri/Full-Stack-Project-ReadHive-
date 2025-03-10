import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import booksRoute from "./routes/books.js"; 
import authRoute from "./routes/auth.js";  // Import auth routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Test Route to Check API is Running
app.get("/", (req, res) => {
  res.send("Read Hive API is running...");
});

// API Routes
app.use("/api/books", booksRoute);
app.use("/api/auth", authRoute);  // Register auth routes

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
