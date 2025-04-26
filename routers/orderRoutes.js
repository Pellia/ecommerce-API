import { Router } from "express";
import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controller/order.js";
import asyncHandler from "../utils/asyncHandler.js";
import validateSchama from "../middleware/validateSchema.js";
import orderSchema from "../schemas/orderSchema.js";

const orderRoutes = Router();

// Get all Orders
orderRoutes.get("/", getOrders);

// Create new Order
orderRoutes.post("/", validateSchama(orderSchema), asyncHandler(createOrder));

// Get Order by ID
orderRoutes.get("/:id", getOrderById);

// Update Order by ID
orderRoutes.put("/:id", validateSchama(orderSchema), asyncHandler(updateOrder));

// Delete Order by ID
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
