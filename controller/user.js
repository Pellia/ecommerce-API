import User from "../models/User.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// Get Users
export const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

// Create User
export const createUser = async (req, res) => {
    const {
        body: { email },
    } = req;
    const found = await User.findOne({ where: { email } });
    if (found) throw new ErrorResponse("User with that email already exists", 400);
    const user = await User.create(req.body);
    res.json(user);
};

// Get User by ID
export const getUserById = async (req, res) => {
    const {
        params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);
    res.json(user);
};

// Update User by ID
export const updateUser = async (req, res) => {
    const {
        body: { email },
        params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);
    const found = await User.findOne({ where: { email } });
    if (found) throw new ErrorResponse("User with that email already exists", 400);
    await user.update(req.body);
    res.json(user);
};

// Delete User by ID
export const deleteUser = async (req, res) => {
    const {
        params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse("User not found", 404);
    await user.destroy();
    res.json({ message: "User deleted" });
};
