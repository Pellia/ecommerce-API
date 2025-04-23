import sequelize from "../db/neon_pg.js";
import User from "./User.js";
import Order from "./Order.js";
import Category from "./Category.js";
import Product from "./Product.js";

// Relationsships
// One-to-Many (User has many Orders)
User.hasMany(Order);
Order.belongsTo(User);

// One-to-Many (Category has many Products)
Category.hasMany(Product,{
    foreignKey:'categoryId',
    onDelete: 'CASCADE',
});
Product.belongsTo(Category,{
    foreignKey:'categoryId',
});

// Sync
await sequelize.sync();
