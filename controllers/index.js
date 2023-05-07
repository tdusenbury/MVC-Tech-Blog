const router = require("express").Router()
const apiRoutes = require("./api");

const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const landingPageRoutes = require("./landingpage-routes");
const signupRoutes = require("./signup-routes")


router.use("/", landingPageRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/home", homeRoutes);
router.use("/signup", signupRoutes);


module.exports = router;