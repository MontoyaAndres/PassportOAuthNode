import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import User from "../models/user-model";

// Load environment variables from .env file
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // if the user exists
          done(null, currentUser);
        } else {
          // If the user doesnt exist, so create it.
          new User({
            googleId: profile.id,
            username: profile.displayName,
            thumbnail: profile._json.image.url
          })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    }
  )
);
