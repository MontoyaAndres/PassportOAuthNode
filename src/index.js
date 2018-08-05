import path from "path";
import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "./routes/auth-routes";

// Load environment variables from .env file
require("dotenv").config();

const app = express();

// set up engine
app
  .set("view engine", "ejs")
  .set("views", path.join(`${__dirname}/views`))
  .use("/auth", AuthRoutes)
  .get("/", (req, res) => {
    res.render("home");
  });

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => app.listen(process.env.PORT || 8080));
// video: https://www.youtube.com/watch?v=tNk2FSKlSYU&index=11&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x
