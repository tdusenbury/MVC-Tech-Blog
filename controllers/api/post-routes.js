const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");


//Create new post
router.post("/", withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.content,
            content: req.body.content,
            user_id: req.body.user_id
        });
        res.json(postData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const [posts] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (posts > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
