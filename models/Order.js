import sequelize from "../db/neon_pg.js";
import { DataTypes } from "sequelize";

// Order Model
const Order = sequelize.define("Order", {
    products: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

export default Order;
