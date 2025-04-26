import sequelize from "../db/neon_pg.js";
import { DataTypes } from "sequelize";
import User from "./User.js";
import Product from "./Product.js";

// Order Model
const Order = sequelize.define("Order", {
    products: {
        type: DataTypes.STRING,
        get: function () {
            return JSON.parse(this.getDataValue("products"));
        },
        set: function (val) {
            return this.setDataValue("products", JSON.stringify(val));
        },
        allowNull: true,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

export default Order;
