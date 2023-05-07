const router = require("express").Router();
const { User } = require("../../models");
//const withAuth = require('../../utils/withAuth');

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.status(200).json(newUser);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
  try {
    const newUser = await User.findOne({
      where: {
        username: req.body.username,
      }
    });

    if (!newUser) {
      res.status(400).json({ message: "Username and/or Password is incorrect. Please try again." });
      return;
    }
    
    const loginPassword = await newUser.checkPassword(req.body.password);

    if (!loginPassword) {
      res.status(400).json({message: "Username and/or Password is incorrect. Please try again.",
    });
      return;
    }
    
    req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

      res.status(200).json({ user: newUser, message: "You have successfully logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.LoggedIn = true;
      req.session.id = dbUserData.id
      res.status(200).json(dbUserData);
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("End")
      res.redirect('/')
    })
  } else {
    res.status(404).end();
  }
});

module.exports = router;
