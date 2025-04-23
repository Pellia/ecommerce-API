import Category from "../models/Category.js";
import Product from "../models/Product.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// product controller
export const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

export const getProductsByCategory = async (req, res) => {
        const {
            params: { id }
        } = req;
        const products = await Product.findAll({
            where: { categoryId: id }
        });
        // Check if category ID exists
        const categoryExists = await Category.findOne({ where: { id } });
        if (!categoryExists) throw new ErrorResponse('Category ID does not exist', 400);
        res.json(products);
};

export const createProduct = async (req, res) => {
    const {
        body: { name, description, price, categoryId }
    } = req;
    if (!name || !description || !price || !categoryId)
        throw new ErrorResponse('name, description, price, categoryId are required', 400);

    // Check if category exists in the Category table
    const categoryExists = await Category.findOne({ where: { id: categoryId } });
    if (!categoryExists) throw new ErrorResponse('Category ID does not exist, please create Category first', 400);

    // Check if product name already exists
    const productExists = await Product.findOne({ where: { name } });
    if (productExists) throw new ErrorResponse('Product with that name already exists', 400);
    const product = await Product.create(req.body);
    res.json(product);
};

export const getProductById = async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: `Product with ID:${id} not found` });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const {
        body: { name, description, price, categoryId },
        params: { id }
    } = req;
    if (!name || !description || !price || !categoryId)
        throw new ErrorResponse('name, description, price, categoryId are required', 400);

    // Check if product ID exists already
    const product = await Product.findByPk(id);
    if (!product) throw new ErrorResponse(`Product with id ${id} not found`, 400);

    // Check if category exists in the Category table
    const categoryExists = await Category.findOne({ where: { id: categoryId } });
    if (!categoryExists) throw new ErrorResponse('Category ID does not exist, please create Category first', 400);

    // Check if product name already exists
    const productExists = await Product.findOne({ where: { name } });
    if (productExists) throw new ErrorResponse('Product with that name already exists', 400);

    await product.update(req.body);
    res.json(product);
};

export const deleteProduct = async (req, res) => {
    const {
        params: { id }
    } = req;
    const product = await Product.findByPk(id);
    if (!product) throw new Error(`Product with ID: ${id} not found`);
    await product.destroy();
    res.json({ message: `Product with ID: ${id} deleted` });
};