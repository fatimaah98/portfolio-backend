exports.isAdmin = async(req, res, next) => {
    try {
        next()
    } 
    catch (error) {
        return res.status(401).json({message: "Admins just access to this route"});    
    }
}