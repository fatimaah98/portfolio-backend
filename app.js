const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const router = require('./routes/projects');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.use("/v1/projects", router)

const mongoUri = process.env.MONGOURI;

(async () => {
    await mongoose.connect(mongoUri);
    console.log('connected');
})()
app.listen(3001, () => {
    console.log(`app running in 3001`);
})