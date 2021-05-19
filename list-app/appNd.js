const express = require("express");
const app = express();
const http = require('http');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));
app.use(express.static("js"));

app.get("/", (req, res) => {
  res.redirect("top.ejs");
});

app.get("/index", (req, res) => {
  res.redirect("index.ejs");
});

app.get("/start", (req, res) => {
  res.redirect("start.ejs");
});

// サーバーを起動するコードを貼り付けてください

app.listen(PORT, function() {
  console.log('start sarver!');
});

