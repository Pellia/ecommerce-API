import Joi from 'joi'

export const categorySchema = Joi.object({
    // id: Joi.number()
    //     .integer()
    //     .required(),
    name: Joi.string()
        .min(3)
        .required(),
});