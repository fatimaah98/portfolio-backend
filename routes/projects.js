const express = require('express');
const { getAllProjects, createProject, get1Project } = require('../controller/projects');
const router = express.Router();
const multer = require("multer");
const coverStorage = require("../uploader");

router.get('/', getAllProjects);
router.post("/", multer({storage: coverStorage, limits: {fileSize: 10000000}}).single('cover') ,createProject);
router.get('/:slug', get1Project);

module.exports = router