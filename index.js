import express from "express";
import { productRoutes } from "./routers/productRoutes.js";
import { categoryRoutes } from "./routers/categoryRoutes.js";
import userRoutes from "./routers/userRoutes.js";
import orderRoutes from "./routers/orderRoutes.js";
import errorHandler from "./utils/errorHandler.js";
import("./models/Association.js");

// Define Server
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// Routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

//Error Handler
app.use(errorHandler);

// Start Server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
