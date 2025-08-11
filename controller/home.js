const mainModel = require("../models/home");
const { serverErrorHandle } = require("../utils/server-error");


exports.setData = async(req, res) => {
    try {
        const {body} = req;
        const {lang} = body;
        const isSavedLang = await mainModel.findOne({lang});
        if(isSavedLang) {
            return res.status(460).json({message: "you have data by this lang"})
        }
        const data = await mainModel.create(body);
        return res.status(201).json({message: "User Data Updated", data})
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