const jwt = require("jsonwebtoken")
const authModel = require("../models/auth");
const { serverErrorHandle } = require("../utils/server-error")

exports.login = async(req, res) => {
    try {
        const {phone, password} = req.body;
        const isUserExist = await authModel.findOne({phone}, '-password');

        if(!isUserExist) {
            return res.status(401).json({message: "user not found. if your info correct, connect with admin"})
        }
        const token = jwt.sign({id: isUserExist._id}, process.env.SECRETTOKEN);
        return res.status(200).json({token, user: isUserExist});

    } 
    catch (error) {
        serverErrorHandle(res, error)    
    }
}

exports.register = async(req, res) => {
    try {
        const {body} = req;
        const isExistUser = await authModel.findOne({phone: body.phone});
        if(isExistUser) {
            return res.status(401).json({message: "user is already exist"})
        }

        const user = await authModel.create(body);
        const token = jwt.sign({id: user._id}, process.env.SECRETTOKEN);
        return res.status(201).json({message: "user added", token});
    } 
    catch (error) {
        serverErrorHandle(res, error)    
    }
}

exports.userInfo = async(req, res) => {
    try {
        const {user} = req;
        return res.status(200).json(user);
    } 
    catch (error) {
        serverErrorHandle(res, error);    
    }
}