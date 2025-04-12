import express from 'express';
import { createCategory, getCategories } from '../controller/category.js';

// Category Route

export const categoryRouter = express.Router()

categoryRouter.route('/').get(getCategories).post(createCategory);