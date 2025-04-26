import sequelize from "../db/neon_pg.js";
import { DataTypes } from "sequelize";

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
        allowNull: false,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

export default Order;
