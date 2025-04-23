import Joi from "joi";

const orderSchema = Joi.object({
    userId: Joi.number().integer().required(),
    products: Joi.object({
        productId: Joi.number().integer().required(),
        quantity: Joi.number().integer().min(1).required(),
    }),
    total: Joi.number().required(),
});

export default orderSchema;
