const Joi = require("joi");

const home_validator = Joi.object({
    description: Joi.string().min(100),
    github: Joi.string(),
    linkedin: Joi.string(),
    lang: Joi.string().length(2)
})

module.exports = home_validator;