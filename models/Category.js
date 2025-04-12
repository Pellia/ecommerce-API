// Category Model
import { DataTypes } from "sequelize";
import sequelize from "../db/neon_pg.js";

const Category = sequelize.define("Category", {
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
});

export default Category;
