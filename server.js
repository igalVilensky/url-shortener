// 1. Load environment variables from .env file
require("dotenv").config();

// 2. Import required packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// 3. Initialize the Express app
const app = express();

// 4. Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan("dev")); // Log HTTP requests in console (GET /path 200 - 12ms)
app.use(cors()); // Allow cross-origin requests
console.log("dotenv loaded:", process.env);
console.log("MONGO_URI:", process.env.MONGO_URI);

const urlRoutes = require("./routes/url");
app.use("/", urlRoutes);

// 5. Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 6. Basic test route
app.get("/", (req, res) => {
  res.send("URL Shortener API is running...");
});

// 7. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
