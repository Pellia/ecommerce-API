import express from 'express';
import { createProduct, getProducts } from '../controller/product.js';

// Product Route

export const productRouter = express.Router()

productRouter.route('/').get(getProducts).post(createProduct);