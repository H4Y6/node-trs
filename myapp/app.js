const express = require("express");
const path = require("path");
const app = express();

const getTime = () => new Date().toLocaleString();

app.use(express.static(path.join(__dirname, "public")));

app.get("/main", (req, res) => {
  res.send("<h1>Hello, world!<h1>");
});

app.get("/contacts", (req, res) => {
  res.send("<H2>Contact page</H2>");
});

app.get("/time", (req, res) => {
  res.send(`<h2 class= 'timer'>${getTime()}</h2>`);
});

app.listen(3000, () => {
  console.log("Use port 3000 to listen to our app");
});
