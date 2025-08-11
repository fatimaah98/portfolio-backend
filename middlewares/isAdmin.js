const JWT = require("jsonwebtoken");
const authModel = require("../models/auth");

exports.isAdmin = async(req, res, next) => {
    try {
        const {authorization} = req.headers;
        
        if(!authorization) {
            return res.status(401).json({message: "please login first!"})
        }

        const token = authorization.split(" ")[1];
        const {id} = JWT.verify(token, process.env.SECRETTOKEN)        
        const user = await authModel.findById(id, '-password')
        
        if(user.role == 'admin') {
            req.user = user;
            next()
        }
        else {
            return res.status(403).json({message: "Admins just access to this route"})
        }
    } 
    catch (error) {
        return res.status(401).json({message: "error 500", error});    
    }
}