import express from "express";
import dotenv from "./config/dotenv.js";
import db from "./config/db.js";
import router from "./routes/index.js";

const PORT = dotenv.PORT || 3000;
const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});