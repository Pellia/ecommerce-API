import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// Get Orders
export const getOrders = async (req, res) => {
    try {
        const users = await Order.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create Order
export const createOrder = async (req, res) => {
    const {
        body: { userId, products },
    } = req;
    if (!userId || !products) throw new ErrorResponse("UserId and products are required", 400);
    const order = await Order.create(req.body);
    res.json(order);
};

// Get Order by ID
export const getOrderById = async (req, res) => {
    try {
        // const {
        //     params: { id },
        // } = req;
        // const user = await Order.findByPk(id);
        // if (!user) return res.status(404).json({ error: "User not found" });
        // res.json(user);
        res.send("Order by ID");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Order by ID
export const updateOrder = async (req, res) => {
    try {
        // const {
        //     body: { name, password, email },
        //     params: { id },
        // } = req;
        // if (!name || !password || !email) return res.status(400).json({ error: "name, password, and email are required" });
        // const user = await User.findByPk(id);
        // if (!user) return res.status(404).json({ error: "User not found" });
        // await user.update(req.body);
        // res.json(user);
        res.send("Order Update by ID");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Order by ID
export const deleteOrder = async (req, res) => {
    try {
        // const {
        //     params: { id },
        // } = req;
        // const user = await Order.findByPk(id);
        // if (!user) return res.status(404).json({ error: "User not found" });
        // await user.destroy();
        // res.json({ message: "User deleted" });
        res.send("Order Delete by ID");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
