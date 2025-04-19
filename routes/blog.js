const express = require('express');
const { getAll, create, remove, update, get1Blog } = require('../controller/blogs');
const { isAdmin } = require('../middlewares/isAdmin');
const { isValidData } = require('../middlewares/isValidData');
const blog_router = express.Router();
const blogSchema = require('../validators/blog');

blog_router.get("/", getAll);
blog_router.post("/", isAdmin,(req, res, next) => isValidData(req, res, next, blogSchema), create);
blog_router.delete("/:id", isAdmin, remove);
blog_router.put("/:id", isAdmin, update);
blog_router.get("/:slug", get1Blog);

module.exports = blog_router;