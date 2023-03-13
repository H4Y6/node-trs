const express = require("express");

const app = express(); //Web-server

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send(`<h2>Home page</h2>`);
});

app.get("/contacts", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send(`<h2>Contact page</h2>`);
});
// app.listen(3000, () => [console.log("Listen to port:3000")]);
