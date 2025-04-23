import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/user.js";
import asyncHandler from "../utils/asyncHandler.js";
import validateSchama from "../middleware/validateSchema.js";
import userSchema from "../schemas/userSchema.js";

const userRoutes = Router();

// Get all Users
userRoutes.get("/", getUsers);

// Create new User
userRoutes.post("/", validateSchama(userSchema), createUser);

// Get User by ID
userRoutes.get("/:id", getUserById);

// Update User by ID
userRoutes.put("/:id", validateSchama(userSchema), updateUser);

// Delete User by ID
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
