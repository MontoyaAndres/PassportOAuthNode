import express from "express";
import passport from "passport";

import "../config/passport-setup";

const Router = express.Router();

// Auth login
Router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
})
  .get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  })
  .get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  )
  .get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/profile");
  });

export default Router;
