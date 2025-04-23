import Category from "../models/Category.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// category controller
export const getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

export const createCategory = async (req, res) => {
    const {
        body: { name }
    } = req;
    if (!name)
        throw new ErrorResponse('name is required', 400);
    const categoryExists = await Category.findOne({ where: { name } });
    if (categoryExists) throw new ErrorResponse('Category with that name already exists', 400);
    const category = await Category.create(req.body);
    res.json(category);
};

export const getCategoryById = async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const category = await Category.findByPk(id);
        if (!category) return res.status(404).json({ error: `Category with ID:${id} not found` });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    const {
        body: { name },
        params: { id }
    } = req;
    if (!name)
        throw new ErrorResponse('name is required', 400);
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse(`Category with id ${id} not found`, 400);
    // Check if category name already exists
    const categoryExists = await Category.findOne({ where: { name } });
    if (categoryExists) throw new ErrorResponse('Category with that name already exists', 400);
    await category.update(req.body);
    res.json(category);
};

export const deleteCategory = async (req, res) => {
    const {
        params: { id }
    } = req;
    const category = await Category.findByPk(id);
    if (!category) throw new Error(`Category with ID: ${id} not found`);
    await category.destroy();
    res.json({ message: `Category with ID: ${id} deleted` });
};