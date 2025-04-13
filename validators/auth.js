const Joi = require("joi");

const authValidator = Joi.object({
    phone: Joi.string().length(11).required().pattern("[0-9]"),
    password: Joi.string().min(10).required()
})

module.exports = authValidator;