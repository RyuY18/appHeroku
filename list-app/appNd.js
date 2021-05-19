const express = require("express");
const app = express();
const http = require('http');
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


app.use(express.static("public"));
app.use(express.static("js"));

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


