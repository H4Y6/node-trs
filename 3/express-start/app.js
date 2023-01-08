const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/con*tacts", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.listen(3000, () => {
  console.log("Listnening to port: 3000.");
});
