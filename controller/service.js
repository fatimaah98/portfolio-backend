const serviceModel = require("../models/service");

exports.getAllServices = async(req, res) => {
    try {
        const services = await serviceModel.find({}, '-__v').lean();
        return res.status(200).json({services});
    } 
    catch (error) {
        return res.status(500).json({message: "Error happened: \n" + error});
    }
}

exports.createNewService = async(req, res) => {
    try {
        const {title, summary, description, newprice, cover} = req.body;
        const isExitService = await serviceModel.findOne({title});
        if(isExitService) {
            return res.status(460).json({message: "The service defineded before. please choose a new title!"})
        }    
        const newService = await serviceModel.create({title, summary, description, newprice, cover});
        return res.status(201).json({message: "new service created", service: newService});
    } 
    catch (error) {
        return res.status(500).json({message: "Error happened: \n" + error});
    }
}

exports.deleteService = async(req, res) => {
    try {
        const {id} = req.params;
        const service = await serviceModel.findOneAndDelete({_id: id});
        if(!service) {
            return res.status(460).json({message: "The service doesn't find"});
        }
        return res.status(200).json({message: "The service deleted successfuly :)"})
    } 
    catch (error) {
        return res.status(500).json({message: "Error happened: \n" + error});  
    }
}

exports.editService = async(req, res) => {
    try {
        const {title, summary, description, cover} = req.body;
        const {id} = req.params;
        const service = await serviceModel.findOneAndUpdate(
            {_id: id},
            {title, summary, description, cover}
        );
        return res.status(201).json({message: "service updated :)"});
    } 
    catch (error) {
        return res.status(500).json({message: "Error happened: \n" + error});       
    }
}

exports.createOffer = async(req, res) => {
    try {
        const {offer, newprice, oldprice} = req.body;
        const {id} = req.params;

        if(!offer) {
            return res.status(460).json({message: "offer doesn't exist!"});
        }
        const service = await serviceModel.findOneAndUpdate(
            {_id: id},
            {offer, oldprice, newprice}
        )
        return res.status(201).json({message: "price updated!"});
    } 
    catch (error) {
        return res.status(500).json({message: "Error happened: \n" + error});  
    }
}