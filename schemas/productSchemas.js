import Joi from 'joi'

export const productSchema = Joi.object({
    // id: Joi.number()
    //     .integer()
    //     .required(),
    name: Joi.string()
        .min(3)
        .required(),
    description: Joi.string()
        .max(2000)
        .required(),
    price: Joi.number()
        .min(1)
        .positive()
        .precision(2)
        .required(),
    categoryId: Joi.number()
        .integer()
        .required(),
});