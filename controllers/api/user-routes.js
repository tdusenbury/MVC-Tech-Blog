const router = require('express').Router();
const { User } = require('../../models');
//const withAuth = require('../../utils/withAuth');

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser
            re
        })
    }
})

router.post('/login', async (req, res) => {
 
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      }
    });
    console.log(userData + "userData")
    if (!userData) {
      res.status(400).json({ message: "wrong credentials" });
      return;
    }
    
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json(err);
      return;
    }

    

    req.session.save(() => {
      req.session.LoggedIn = true;
      req.session.id = userData.id

      res.status(200).json({ userData });
    });
  } catch (err) {
  
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
  if (req.session.LoggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("we are in.")
      res.redirect('/')
    })
  } else {
    res.status(404).end();
  }
});

module.exports = router;
