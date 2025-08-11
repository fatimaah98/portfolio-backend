const mongoose = require('mongoose');


const schema = mongoose.Schema({
    description: {
        type: String
    },
    github:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    lang: {
        type: String,
        enum: ['en', 'fa', 'ar']
    }
}, {
    timestamps: true
})

const mainModel = mongoose.model("home", schema);
module.exports = mainModel;