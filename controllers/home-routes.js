const router = require("express").Router();
const { Post, User, Comment } = require("../models");
//const withAuth = require("../utils/withAuth");

router.get("/", async (req, res) => { 
    res.render("login")
})

module.exports = router;