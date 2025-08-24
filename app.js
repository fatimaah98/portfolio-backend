const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

const router = require('./routes/projects');
const main_router = require('./routes/home');
const auth_router = require('./routes/auth');
const blog_router = require('./routes/blog');
const uploadRouter = require('./routes/upload-image');

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1/:lang/projects", router)
app.use("/api/v1/:lang/home", (req, res, next) => {
    req.lang = req.params.lang;
    next()
} ,main_router);
app.use("/api/v1/:lang/auth", auth_router)
app.use("/api/v1/:lang/blogs", blog_router);
app.use("/api/v1/:lang/upload", uploadRouter);
app.use("/static", express.static(path.join(__dirname, "static")))
app.use("/", (req, res) => res.status(200).json({message: "welcome to my world :)"}))

const mongoUri = process.env.MONGOURI;

(async () => {
    await mongoose.connect(mongoUri);
    console.log('connected');
})()
app.listen(3001, () => {
    console.log(`app running in 3001`);
})