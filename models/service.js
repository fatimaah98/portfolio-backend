const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String
    },
    description: {
        type: String
    },
    newprice: {
        type: String,
        default: 0
    },
    oldprice: {
        type: String,
        default: 0
    },
    offer: {
        type: Boolean,
        default: false,
    },
    cover: {
        type: String
    },
}, {timestamps: true});

const serviceModel = mongoose.model("service", schema);

module.exports = serviceModel;