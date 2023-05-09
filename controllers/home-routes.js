const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/home", withAuth, async (req, res) => { 
    try {
        const postData = await Post.findAll({
          include: [User],
        });
    
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render("home", { post: posts, LoggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [ User,
              {
                model: Comment,
               include: [User],
              },
            ],
          });
          if (postData) {
          const post = postData.get({ plain: true });
      console.log(post)
          res.render("comment", { post });
          } else {
            res.status(404).end();
          }
        }  catch (err) {
          res.status(500).json(err);
        }
      });

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
            return;
        }
        res.render("signup");
        });
    
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
            return;
            }
        res.render('login');
        });


module.exports = router;