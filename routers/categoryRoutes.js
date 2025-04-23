import express from 'express';
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controller/category.js';
import asyncHandler from '../utils/asyncHandler.js';
import { categorySchema } from '../schemas/categorySchemas.js';
import { validateSchema } from '../middleware/validateSchema.js';

// Category Route
export const categoryRoutes = express.Router()

// Get all Categories
categoryRoutes.route('/').get(getCategories);

// Create new Category
categoryRoutes.route('/').post(validateSchema(categorySchema),asyncHandler(createCategory));

// Get Category by ID
categoryRoutes.route("/:id").get(getCategoryById);

// Update Category by ID
categoryRoutes.route("/:id").put(validateSchema(categorySchema),asyncHandler(updateCategory));


// Delete Category by ID
categoryRoutes.route("/:id").delete(deleteCategory);