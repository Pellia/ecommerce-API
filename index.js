import express from "express";

// Define Server
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// Routes

// Start Server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
