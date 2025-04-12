import { Router } from "express";
import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controller/order.js";

const orderRoutes = Router();

// Get all Orders
orderRoutes.get("/", getOrders);

// Create new Order
orderRoutes.post("/", createOrder);

// Get Order by ID
orderRoutes.get("/:id", getOrderById);

// Update Order by ID
orderRoutes.put("/:id", updateOrder);

// Delete Order by ID
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
