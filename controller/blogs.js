const { serverErrorHandle } = require("../utils/server-error");
const blogModel = require("../models/blogs");

exports.getAll = async(req, res) => {
    try {
        const blogs = await blogModel.find({}, "-__v").lean();
        return res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs
        })
    } 
    catch (error) {
        return serverErrorHandle(res, error);
    }
}

exports.create = async(req, res) => {
    try {
        const { title, slug, cover, content, lang } = req.body;
        const isExistBlog = await blogModel.findOne({ slug });
        if(isExistBlog) {
            return res.status(460).json({
                success: false,
                message: "Blog already exists"
            })
        }

        const blog = await blogModel.create({ title, slug, cover, content, lang });
        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog
        });
    } 
    catch (error) {
        return serverErrorHandle(res, error);
    }
}

exports.update = async(req, res) => {
    try {
        const {id} = req.params;
        const { title, cover, content, lang, slug } = req.body;

        // ? check if the blog is exists or not:
        const isExistBlog = await blogModel.findById(id);
        if(!isExistBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        // ? check if the slug is already exists or not:
        const isDuplicateSlug = await blogModel.findOne({ 
            slug, 
            _id: { $ne: id } // یعنی هر رکوردی به‌جز این یکی
          });
        if (isDuplicateSlug) {
            return res.status(400).json({
                success: false,
                message: "Slug already exists for another blog"
            });
        }
        
        const blog = await blogModel.findByIdAndUpdate(id, { title, cover, content, lang }, { new: true });
        return res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog
        })
    } 
    catch (error) {
        return serverErrorHandle(res, error);
    }
}

exports.remove = async(req, res) => {
    try {
        const {id} = req.params;
        const isExistBlog = await blogModel.findById(id);
        if(!isExistBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }
        await blogModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        })
    } 
    catch (error) {
        return serverErrorHandle(res, error);
    }    
}

exports.get1Blog = async(req, res) => {
    try {
        const {slug} = req.params;
        const blog = await blogModel.findOne({slug}, '-__v');
        if(!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            blog
        })
    } 
    catch (error) {
        return serverErrorHandle(res, error);
    }
}