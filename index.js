import express from "express";
import userRoutes from "./routers/userRoutes.js";
import orderRoutes from "./routers/orderRoutes.js";
import("./models/Association.js");

// Define Server
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

// Start Server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
