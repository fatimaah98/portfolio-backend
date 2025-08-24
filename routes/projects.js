const express = require('express');
const { getAllProjects, createProject, get1Project, updateProject, deleteOne } = require('../controller/projects');
const { isAdmin } = require('../middlewares/isAdmin');
const router = express.Router();
const multer = require("multer");
const coverStorage = require("../uploader");
const { isValidData } = require('../middlewares/isValidData');
const projects_Schema = require('../validators/project');

router.get('/', getAllProjects);
router.post("/", 
    isAdmin, 
    (req, res, next) => isValidData(req, res, next, projects_Schema),
    createProject
);
router.get('/:slug', get1Project);
router.put("/:id", 
    isAdmin,
    updateProject
);
router.delete("/:id", isAdmin, deleteOne);
module.exports = router