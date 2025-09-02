const express = require("express");
const { getAllServices, createNewService, deleteService, editService, createOffer } = require("../controller/service");
const { isAdmin } = require("../middlewares/isAdmin");

const serviceRouter = express.Router();

serviceRouter.get("/", getAllServices);
serviceRouter.post("/", isAdmin, createNewService);
serviceRouter.delete("/:id", isAdmin, deleteService);
serviceRouter.put("/offer/:id", isAdmin, createOffer);
serviceRouter.put("/:id", isAdmin, editService);

module.exports = serviceRouter;