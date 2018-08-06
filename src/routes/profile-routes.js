import express from "express";

const Router = express.Router();

function authCheck(req, res, next) {
  if (!req.user) {
    return res.redirect("/auth/login");
  }

  return next();
}

Router.get("/", authCheck, (req, res) => {
  res.render("profile", { user: req.user });
});

export default Router;
