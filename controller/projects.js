const model = require("../models/projects");

exports.getAllProjects = async(req, res) => {
    try {
        const projects = await model.find({}).lean();
        res.status(200).json(projects)
    } 
    catch (error) {
        res.status(500).json({message: 'Error 500', error})    
    }
};

exports.createProject = async(req, res) => {
    try {

    } 
    catch (error) {
        
    }
};

exports.get1Project = () => {};
