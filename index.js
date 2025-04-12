import express from "express";
import { productRouter } from "./routers/productRoutes.js";
import { categoryRouter } from "./routers/categoryRoutes.js";

// Define Server
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

// Start Server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
