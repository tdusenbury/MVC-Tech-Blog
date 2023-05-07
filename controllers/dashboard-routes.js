const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/withAuth");


router.get("/dashboard", withAuth, async (req, res) => {
    console.log("dashboard here")
    try {
        const userPostData = await Post.findAll({
            where: {
                user_id: req.session.id,
            }
        });
        const userPosts = userPostData.map((post) => post.get({ plain: true }));
        res.render("dashboard",
            {
                userPosts,
                LoggedIn: req.session.LoggedIn
            });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;