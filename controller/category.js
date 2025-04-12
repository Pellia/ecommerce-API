import Category from "../models/Category.js";

// category controller
export const getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

export const createCategory = async (req, res) => {
    try {
        const {
            body: { name }
        } = req;
        if (!name)
            return res.status(400).json({ error: 'name is required' });
        const category = await Category.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};