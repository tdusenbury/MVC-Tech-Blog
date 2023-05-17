const router = require('express').Router();
const { Post, User, Comment } = require('../models');


// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll(
//             {
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['username'],
//                     }
//                 ]
//             })

//         const posts = postData.map((post) => post.get({ plain: true }));
//         console.log("Landing is working")
//         res.render("landing",
//             { posts,
//             LoggedIn: req.session.loggedIn
//         });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });

module.exports = router;