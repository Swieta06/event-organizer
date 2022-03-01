const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const { encrypt } = require("../utils");

passport.use(
  new LocalStrategy(function (username, password, done) {
    // TODO: find the user by username and validate the password is correct then return done

  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
