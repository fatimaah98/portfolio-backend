const express = require('express');
const { setData, updateData, getData } = require('../controller/home');
const { isAdmin } = require('../middlewares/isAdmin');
const main_router = express.Router();

main_router.post("/", isAdmin, setData);
main_router.put("/", isAdmin, updateData);
main_router.get("/", getData);


module.exports = main_router
