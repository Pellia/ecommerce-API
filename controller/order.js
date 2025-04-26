import Order from "../models/Order.js";
import Product from "../models/Product.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// Get Total
const getTotal = async (products) => {
    const arr = { ...products };
    let total = 0;
    for (const item in arr) {
        const price = await Product.findOne({
            attributes: ["price"],
            where: {
                id: arr[item]["productId"],
            },
        });
        if (!price) throw new ErrorResponse("price not found", 400);
        total += price.dataValues["price"] * arr[item]["quantity"];
    }
    return total;
};

// Get Orders
export const getOrders = async (req, res) => {
    const users = await Order.findAll({
        attributes: ["id", "UserId", "products", "total"],
    });
    res.json(users);
};

// Create Order
export const createOrder = async (req, res) => {
    const {
        body: { UserId, products },
    } = req;
    if (!UserId || !products) throw new ErrorResponse("UserId and products are required", 400);
    req.body["total"] = await getTotal(products);
    const order = await Order.create(req.body);
    const orders = await Order.findAll({
        attributes: ["id", "UserId", "products", "total"],
        where: {
            id: order.id,
        },
    });
    res.json(orders);
};

// Get Order by ID
export const getOrderById = async (req, res) => {
    const {
        params: { id },
    } = req;
    const orders = await Order.findAll({
        attributes: ["id", "UserId", "products", "total"],
        where: {
            id: id,
        },
    });
    if (!orders) throw new ErrorResponse("Order not found", 404);
    res.json(orders);
};

// Update Order by ID
export const updateOrder = async (req, res) => {
    const {
        body: { UserId, products },
        params: { id },
    } = req;
    if (!UserId || !products) throw new ErrorResponse("UserId and products are required", 400);

    req.body["total"] = await getTotal(products);

    const order = await Order.findByPk(id);
    if (!order) throw new ErrorResponse("Order not found", 404);

    await order.update(req.body);

    const orders = await Order.findAll({
        attributes: ["id", "UserId", "products", "total"],
        where: {
            id: id,
        },
    });
    res.json(orders);
};

// Delete Order by ID
export const deleteOrder = async (req, res) => {
    const {
        params: { id },
    } = req;
    const order = await Order.findByPk(id);
    if (!order) throw new ErrorResponse("Order not found", 404);
    await order.destroy();
    res.json({ message: "Order deleted" });
};
