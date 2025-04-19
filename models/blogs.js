const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    cover: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        enum: ['en', 'fa', 'ar']
    }
}, {
    timestamps: true
})

const blogModel = mongoose.model('blogs', blogSchema);

module.exports = blogModel;