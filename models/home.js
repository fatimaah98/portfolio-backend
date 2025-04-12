const mongoose = require('mongoose');


const schema = mongoose.Schema({
    smortDefine:{
        type: String,
    },
    myFavoriteWork:{
        type: String,
    },
    exprience:{
        type: String,
    },
    skills: [String],
    goals:{
        type: String,
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
    },
    welcome: {
        type: String
    },
    name: {
        type: String,
    }
}, {
    timestamps: true
})

const mainModel = mongoose.model("home", schema);
module.exports = mainModel;