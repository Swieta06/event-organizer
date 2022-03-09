const passport = require("passport");
const { User } = require("../models");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const uuid = require("uuid");
const encrypt = require("../utils/bcrypt");
passport.use(
  new GoogleStrategy(
    {
      callbackURL: process.env.CALLBACK_URL,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      const id = uuid.v4();
      const pass = encrypt.generate(profile.id);
      console.log(pass);
      const email = profile.emails[0].value;
      const name = profile.name.givenName + profile.name.familyName;
      const photo = profile.photos[0].value;
      const source = "google";
      const currentUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!currentUser) {
        const newUser = await User.create({
          id,
          email,
          name,
          photo,
          password: pass,
        });
        return done(null, newUser);
      } else {
        console.log(currentUser);
        currentUser.lastVisited = new Date();
        return done(null, currentUser);
      }

      // if (currentUser.source != "google") {
      //   //return error
      //   return done(null, false, {
      //     message: `You have previously signed up with a different signin method`,
      //   });
      // }
    }
  )
);
