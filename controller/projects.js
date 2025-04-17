const projectModel = require("../models/projects");
const model = require("../models/projects");

exports.getAllProjects = async(req, res) => {
    try {
        const projects = await model.find({}, "-__v").lean();
        res.status(200).json(projects)
    } 
    catch (error) {
        res.status(500).json({message: 'Error 500', error})    
    }
};

exports.createProject = async(req, res) => {
    try {
        const {body, file} = req;
        // const cover = file.filename;
        const isExistSlug = await projectModel.findOne({slug: body.slug});
        if(isExistSlug) {
            return res.status(460).json({message: "this slug is exsit! please choose another slug"})
        }
        const createdProject = await projectModel.create({...body});
        return res.status(201).json({createdProject})
    } 
    catch (error) {
        return res.status(500).json({message: "Internal server Error: \n " + error})
    }
};

exports.get1Project = async(req, res) => {
    try {
        const {slug} = req.params;
        const project = await projectModel.findOne({slug}, "-__v");
        if(project) {
            return res.status(200).json(project);
        }    
        return res.status(404).json({message: "404 Page Not Found"})
    } 
    catch (error) {
        return res.status(500).json({message: "Internal server Error: \n " + error})
    }
};

exports.updateProject = async(req, res) => {
    try {
        const {id} = req.params;
        const {description, title, summary, tags, slug} = req.body;
        const cover = req.file.filename;

        const project = await projectModel.findOneAndUpdate({_id: id}, {
            description, title, summary, tags, cover, slug
        });
        if(project) {
            return res.status(200).json({message: "Project Updated"})
        }
        else {
            return res.status(404).json({message: "ID not founded"});
        }
    } 
    catch (error) {
        return res.status(500).json({message: "Internal server Error: \n " + error});
    }
};