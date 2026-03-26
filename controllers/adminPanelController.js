import userModel from "../models/userModel.js";
// controllers/adminPanelController.js

// Home page controller
export function homePage(req, res) {
    res.send("/");
}

// Login page controller
export function loginPage(req, res) {
    res.send("Admin Login Page");
}

// Register page controller
export function registerPage(req, res) {
    res.send("Admin Register Page");
}