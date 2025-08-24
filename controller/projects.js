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
        const body = {...req.body, cover: `./static/${req.file.filename}`}
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
    console.log("object");
    try {
        const {id} = req.params;
        const cover = `./static/${req.file.filename}`;
        const {description, title, summary, tags} = req.body;

        const project = await projectModel.findOneAndUpdate({_id: id}, {
            description, title, summary, tags, cover
        });
        if(project) {
            return res.status(200).json({message: "Project Updated", project})
        }
        else {
            return res.status(404).json({message: "ID not founded"});
        }
    } 
    catch (error) {
        return res.status(500).json({message: "Internal server Error: \n " + error});
    }
};

exports.deleteOne = async(req, res) => {
    try {
        const {id} = req.params;
        const isProjectExist = await projectModel.deleteOne({_id: id});

        if(!isProjectExist) {
            return res.status(460).json({message: "the project doesn't exist!"});
        }
        return res.status(200).json({message: "project removed from data base!"})
    } catch (error) {
        return res.status(500).json({message: "error form remove: ", error});
    }
}