const Joi = require("joi");

const home_validator = Joi.object({
    smortDefine: Joi.string(),
    myFavoriteWork: Joi.string(),
    exprience: Joi.string(),
    skills: Joi.array().items(Joi.string()),
    goals: Joi.string(),
    github: Joi.string(),
    linkedin: Joi.string(),
    lang: Joi.string().length(2),
    welcome: Joi.string().max(100),
    name: Joi.string().max(100),
})

module.exports = home_validator;