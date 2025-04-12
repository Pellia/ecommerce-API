import Product from "../models/Product.js";

// product controller
export const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

export const createProduct = async (req, res) => {
    try {
        const {
            body: { name, description, price, categoryId }
        } = req;
        if (!name || !description || !price || !categoryId)
            return res.status(400).json({ error: 'name, description, price, categoryId are required' });
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};