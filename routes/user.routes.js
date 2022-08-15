const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  const username = req.user.displayName;
  const imageUrl = req.user.photos[0].value;
  console.log
  res.render('logged', { username, imageUrl });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('userProfile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('userProfileSettings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;