const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));

app.set("public", __dirname + "/static");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 8080);
