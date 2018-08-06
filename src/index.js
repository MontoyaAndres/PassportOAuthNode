import path from "path";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import sessions from "express-session";
import AuthRoutes from "./routes/auth-routes";
import profileRoutes from "./routes/profile-routes";

// Load environment variables from .env file
require("dotenv").config();

const app = express();

app
  .set("view engine", "ejs")
  .set("views", path.join(`${__dirname}/views`))
  .use(
    sessions({
      secret: process.env.SESSIONS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use("/auth", AuthRoutes)
  .use("/profile", profileRoutes)
  .get("/", (req, res) => {
    res.render("home", { user: req.user });
  });

mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODBURL,
    { useNewUrlParser: true }
  )
  .then(() => app.listen(process.env.PORT || 8080));
