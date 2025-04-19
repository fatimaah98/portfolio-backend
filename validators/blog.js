const Joi = require("joi");

const blogSchema = Joi.object({
    title: Joi.string().required().max(225),
    slug: Joi.string().required().max(225),
    cover: Joi.string().required(),
    content: Joi.string().required(),
    lang: Joi.string().valid('en', 'fa', 'ar').default('en')
});

module.exports = blogSchema;