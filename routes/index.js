import { Router } from "express";
import apiRouter from "./api/index.js";
import adminPanelRouter from "./adminPanelRouter.js"; 

const router = Router();

// Root route
router.get("/", (req, res) => {
   return res.render("index.ejs")
});

// Admin routes
router.use("/admin", adminPanelRouter);

// API routes
router.use("/api", apiRouter);

export default router;