const router = require("express").Router();

const apiRoutes = require("./api")

const landingPageRoutes = require("./landingpage-routes")

router.use("/", landingPageRoutes);
router.use("/api", apiRoutes);

module.exports = router;