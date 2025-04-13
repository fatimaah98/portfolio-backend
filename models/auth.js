const mongoose = require("mongoose");

const schema = mongoose.Schema({
    password: {
        type: String,
        min: 10
    },
    phone: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        default: "admin"
    }
})

const authModel = mongoose.model("user", schema);
module.exports = authModel;