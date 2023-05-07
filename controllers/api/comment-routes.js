const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a new comment /api/comments
router.post("/", withAuth, async (req, res) => {
  
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.body.user_id
    });
      res.json(newComment);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;