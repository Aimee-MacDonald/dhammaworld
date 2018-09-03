const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const User = require(__dirname + "/dbmodels/user");

mongoose.connect(process.env.DBURL);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));

app.set("public", __dirname + "/static");

app.get("/", (req, res) => {
  
  console.log("Creating new User:\n");
  let newUser = new User({'email': 'email', 'password': 'password'});
  newUser.save(err => {
    if(err) console.log("Error: " + err);
  });

  res.render("index");
});

app.get("/dev", (req, res) => {
  res.render("dev");
});

app.listen(process.env.PORT || 8080);
