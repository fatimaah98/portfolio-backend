const express = require('express');
const multer = require("multer");
const coverStorage = require("../uploader");
const { uploadImage } = require('../controller/upload-image');
const uploadRouter = express.Router();

uploadRouter.post("/", 
    multer({storage: coverStorage, limits: {fileSize: 10000000}}).single('cover'),
    uploadImage
)

module.exports = uploadRouter;