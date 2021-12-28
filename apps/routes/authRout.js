// * in bakhsh rout haye auth mibashad login and register

const express = require("express");

const authRouter = express.Router();
const authController = require("../controllers/auth");

authRouter.get("/login", authController.showLogin);
authRouter.post("/login", authController.doLogin);
authRouter.get("/register", authController.showRegister);
authRouter.post("/register", authController.doRegister);

module.exports = authRouter;
