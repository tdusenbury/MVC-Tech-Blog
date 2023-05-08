const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");


router.get("/dashboard", withAuth, async (req, res) => {
    console.log("dashboard here")
    try {
        const userPostData = await Post.findAll({
            where: {
                user_id: req.session.userId,
            }
        });
        const userPosts = userPostData.map((post) => post.get({ plain: true }));
        res.render("dashboard",
            {
                layout: "main",
                userPosts,
                LoggedIn: req.session.loggedIn
            });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;