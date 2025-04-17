const Joi = require("joi");

const projects_Schema = Joi.object({
    title: Joi.string().max(100).min(5).required(),
    slug: Joi.string().required(),
    summary: Joi.string().max(255).required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    cover: Joi.string(),
    lang: Joi.string().required()
})

module.exports = projects_Schema;