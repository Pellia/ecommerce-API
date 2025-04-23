import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct, getProductsByCategory } from "../controller/product.js";
import asyncHandler from "../utils/asyncHandler.js";
import validateSchema from "../middleware/validateSchema.js";
import { productSchema } from "../schemas/productSchemas.js";

// Product Route

export const productRoutes = express.Router();

// Get all Products
productRoutes.route("/").get(getProducts);

// Get all Products by Category ID
productRoutes.route("/categoryId/:id").get(getProductsByCategory);

// Create new Product
productRoutes.route("/").post(validateSchema(productSchema), asyncHandler(createProduct));

// Get Product by ID
productRoutes.route("/:id").get(getProductById);

// Update Product by ID
productRoutes.route("/:id").put(validateSchema(productSchema), asyncHandler(updateProduct));

// Delete Product by ID
productRoutes.route("/:id").delete(deleteProduct);
