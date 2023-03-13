const express = require("express");
const path = require("path");
const app = express();

const getTime = () => new Date().toString().slice(0, 25);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/contacts", (req, res) => {
  res.send("<H1>Contact page</H1>");
});

app.get("/time", (req, res) => {
  res.send(`<h2>${getTime()}</h2>`);
});

app.listen(3000, () => {
  console.log("Use port 3000 to listen to our app");
});
