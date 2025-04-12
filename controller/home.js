const mainModel = require("../models/home");
const { serverErrorHandle } = require("../utils/server-error");


exports.setData = async(req, res) => {
    try {
        const {body} = req;
        await mainModel.create(body);
        return res.status(201).json({message: "User Data Updated"})
    } 
    catch (error) {
        serverErrorHandle(res, error);
    }
}

exports.getData = async(req, res) => {
    try {
        const {lang} = req;
        const data = await mainModel.findOne({lang});
        return res.status(200).json(data);
    } 
    catch (error) {
        serverErrorHandle(res, error);    
    }
}

exports.updateData = async(req, res) => {
    try {
        const {body, lang} = req;
        await mainModel.findOneAndUpdate({lang}, body);
        const data = await mainModel.findOne({lang});
        return res.status(200).json({message: `Your information with ${lang} language, updated`, data});
    } 
    catch (error) {
        serverErrorHandle(res, error);
    }
}