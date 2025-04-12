// Product Model
import { DataTypes } from "sequelize";
import sequelize from "../db/neon_pg.js";
import Category from "./Category.js";

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: "id",
        },
    },
});

export default Product;
