const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user')

router.get('/', (req,res,next) => {
  User.find()
    .then((doc) => {
      res.json({ doc});
    });
});

router.post('/signup', passport.authenticate('local.signup'), (req, res) => {
  res.json({
    message: 'Success'
  })
})

module.exports = router;
