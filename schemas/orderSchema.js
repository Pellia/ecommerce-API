import Joi from "joi";

const orderSchema = Joi.object({
    userId: Joi.number().integer().required(),
    // products: Joi.JSONB({
    //     productId: Joi.number().integer().required(),
    //     quantity: Joi.number().integer().min(1).required(),
    // }),
    products: Joi.JSONB().required(),
});

export default orderSchema;
