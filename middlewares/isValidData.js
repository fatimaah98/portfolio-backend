exports.isValidData = async(req, res, next, schema) => {
    try {
        const isValid = await schema.validateAsync(req.body);
        if(isValid) {
            next();
        }
        else {
            return res.status(460).json({message: "Body request not valid"})
        }
    } 
    catch (error) {
        return res.status(460).json({message: "The FormData Is Not Valid!", error})    
    }
}