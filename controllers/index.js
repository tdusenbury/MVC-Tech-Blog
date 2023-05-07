const router = require("express").Router();
const apiRoutes = require("./api")


const landingRoutes = require("./landing-routes")
const loginRoutes = require("./logging-routes")
const signUpRoutes = require("./signup-routes")
const homeRoutes = require("./home-routes")
const dashboardRoutes = require("./dashboard-routes.js")


router.use("/", landingRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/home", homeRoutes);
router.use("/dashboard", dashboardRoutes);


module.exports = router;