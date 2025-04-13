const express = require('express');
const { login, register, userInfo } = require('../controller/auth');
const { isAdmin } = require('../middlewares/isAdmin');
const auth_router = express.Router();


auth_router.post("/login", login);
auth_router.post("/register", register);
auth_router.post("/userinfo", isAdmin, userInfo);

module.exports = auth_router