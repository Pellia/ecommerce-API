import Category from "../models/Category.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// GET Categories
export const getCategories = async (req, res) => {
    const categories = await Category.findAll({
        attributes: ["id", "name"],
    });
    res.json(categories);
};

// POST Category
export const createCategory = async (req, res) => {
    const {
        body: { name },
    } = req;
    if (!name) throw new ErrorResponse("name is required", 400);
    const categoryExists = await Category.findOne({ where: { name } });
    if (categoryExists) throw new ErrorResponse("Category with that name already exists", 400);
    const category = await Category.create(req.body);
    const categories = await Category.findAll({
        attributes: ["id", "name"],
        where: {
            id: category.id,
        },
    });
    res.json(categories);
};

// GET Category by ID
export const getCategoryById = async (req, res) => {
        const {
            params: { id },
        } = req;
        const category = await Category.findAll({
            attributes: ["id", "name"],
            where: {
                id: id,
            },
        });
        if (!category) throw new ErrorResponse(`Category with ID:${id} not found`,400);
        res.json(category);
};

//PUT Category
export const updateCategory = async (req, res) => {
    const {
        body: { name },
        params: { id },
    } = req;
    if (!name) throw new ErrorResponse("name is required", 400);
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse(`Category with id ${id} not found`, 400);
    // Check if category name already exists
    const categoryExists = await Category.findOne({ where: { name } });
    if (categoryExists) throw new ErrorResponse("Category with that name already exists", 400);
    await category.update(req.body);
    const categories = await Category.findAll({
        attributes: ["id", "name"],
        where: {
            id: category.id,
        },
    });
    res.json(categories);
};

//DELETE Category
export const deleteCategory = async (req, res) => {
    const {
        params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) throw new ErrorResponse(`Category with ID: ${id} not found`,400);
    await category.destroy();
    res.json({ message: `Category with ID: ${id} deleted` });
};
