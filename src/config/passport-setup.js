import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

// Load environment variables from .env file
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
    }
  )
);
