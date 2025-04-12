import sequelize from "../db/neon_pg.js";
import User from "./User.js";
import Order from "./Order.js";

// Relationsships
// One-to-Many (User has many Orders)
User.hasMany(Order);
Order.belongsTo(User);

// Sync
await sequelize.sync();
