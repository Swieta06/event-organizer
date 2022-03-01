const express = require('express');
const router = express.Router();
const passport = require('passport');
const { authentication } = require('../../middlewares');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

/* Login Goole. */
router.get(
  '/login/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  '/login/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/',
    failureFlash: true,
    successFlash: 'Successfully logged in!',
  })
);

router.get('/request-reset-password', (req, res) => {
  res.render('pages/request-reset-password-test');
});

router.get('/confirm-reset-password', (req, res) => {
  res.render('pages/confirm-reset-password-test');
});

module.exports = router;
