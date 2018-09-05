const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require(__dirname + "/dbmodels/user");

const auth = require(__dirname + "/routes/auth");

mongoose.connect(process.env.DBURL);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.set("public", __dirname + "/static");

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dev", (req, res) => {
  res.render("dev");
});

app.listen(process.env.PORT || 8080);
