require("dotenv").config();
const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, () => {
  console.log("App started on port: " + process.env.PORT);
});
