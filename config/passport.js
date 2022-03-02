const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const bcrypt = require("../utils/bcrypt");

passport.use(
  new LocalStrategy(async function (email, password, done) {
    // TODO: find the user by username and validate the password is correct then return done
    const user = await User.findOne({
      where: {
        email,
      },
    });
    const compare = user ? bcrypt.compare(password, user.dataValues.password) : 0;
    if (!user || !compare)
      return done(null, false, { message: "Password or username invalid!" });

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
