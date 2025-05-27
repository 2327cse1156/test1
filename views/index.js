var express = require("express");
var parser = require("body-parser");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Sever is running successfully");
});
