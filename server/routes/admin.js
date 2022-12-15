const adminController = require("../controllers/adminController")



const adminRouter = require("express").Router();

const { verifyToken } = require("../controllers/adminToken");


adminRouter.post("/register", adminController.registerAdmin);
adminRouter.post("/refresh", adminController.requestRefreshToken);
adminRouter.post("/login", adminController.loginAdmin);
adminRouter.post("/logout", verifyToken, adminController.logOut);

module.exports = adminRouter;