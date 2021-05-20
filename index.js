const express = require("express");
const app = express();
const fs = require('fs');
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("js"));
app.use(express.static("views"))

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("start.ejs");
});


app.listen(PORT, function() {
  console.log('start sarver!');
});


