import Joi from "joi";

const orderSchema = Joi.object({
    UserId: Joi.number().integer().required(),
    products: Joi.array().items(
        Joi.object({
            productId: Joi.number().integer().required(),
            quantity: Joi.number().integer().required(),
        })
    ),
});

export default orderSchema;
