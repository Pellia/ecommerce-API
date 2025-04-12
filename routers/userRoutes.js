import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/user.js";

const userRoutes = Router();

// Get all Users
userRoutes.get("/", getUsers);

// Create new User
userRoutes.post("/", createUser);

// Get User by ID
userRoutes.get("/:id", getUserById);

// Update User by ID
userRoutes.put("/:id", updateUser);

// Delete User by ID
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
