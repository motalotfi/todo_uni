// * in bakhsh rout asli mibashad ke baghie rout ha dar inja kenar ham gharar migiran



const authRouter = require("./authRout");
const adminRouter = require("./admin");
const adminController = require("../controllers/adminController");
// const auth = require("../middleware/auth");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/auth/login");
  });

  app.use("/admin", adminRouter);
  app.use("/auth", authRouter);
  app.get("/delete/:taskId", adminController.del);
  app.get("/done/:taskId", adminController.done);
 
};
