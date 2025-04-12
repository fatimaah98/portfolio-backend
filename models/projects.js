const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },    
    slug: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [String],
    cover: {
        type: String,
    },    
    lang: {
        type: String,
        enum: ['en', 'fa', 'ar']
    },
}, {
    timestamps: true
})

const projectModel = mongoose.model("projects", Schema);
module.exports = projectModel;