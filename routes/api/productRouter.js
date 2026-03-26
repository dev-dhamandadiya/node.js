import { Router } from "express";
import { createProduct, getAllProduct, deleteProduct, updatedProduct } from "../../controllers/apiController/productController.js";
import imageUpload from "../../middleware/uploadImages.js";

const productRouter = Router();

// Create product
productRouter.post("/", imageUpload, createProduct);

// Get all products
productRouter.get("/", getAllProduct);

// Delete product by ID
productRouter.delete("/:id", deleteProduct);

// Update product by ID
productRouter.patch("/:id", imageUpload, updatedProduct);

export default productRouter;