import express from "express";
import passport from "passport";

import "../config/passport-setup";

const Router = express.Router();

// Auth login
Router.get("/login", (req, res) => {
  res.render("login");
})
  .get("/logout", (req, res) => {
    res.send("logout");
  })
  .get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  )
  .get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send("you reached the callback URL");
  });

export default Router;
