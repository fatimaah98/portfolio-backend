const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: {
        type: String,
        requires: true
    },
    summary: {
        type: String,
        required: true
    },
    keyTags: [String],
    description: {
        type: String,
    }
})

const model = mongoose.model("projects", Schema);
module.exports = model;