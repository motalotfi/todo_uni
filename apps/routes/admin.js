const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");


adminRouter.get("/dashboard", adminController.dashboard);

adminRouter.get("/my-account", adminController.myAccount);
adminRouter.post("/add", adminController.add);

module.exports = adminRouter;
