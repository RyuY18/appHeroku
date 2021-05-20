const express = require("express");
const app = express();
const path = require("path");
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

// サーバーを起動するコードを貼り付けてください

app.listen(PORT, function() {
  console.log('start sarver!');
});


