import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string(),
});

export default userSchema;
