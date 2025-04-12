import User from "../models/User.js";

// Get Users
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create User
export const createUser = async (req, res) => {
    try {
        const {
            body: { name, password, email },
        } = req;
        if (!name || !password || !email) return res.status(400).json({ error: "name, password, and email are required" });
        const found = await User.findOne({ where: { email } });
        if (found) return res.status(400).json({ error: "User already exists" });
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User by ID
export const getUserById = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User by ID
export const updateUser = async (req, res) => {
    try {
        const {
            body: { name, password, email },
            params: { id },
        } = req;
        if (!name || !password || !email) return res.status(400).json({ error: "name, password, and email are required" });
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete User by ID
export const deleteUser = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        await user.destroy();
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
