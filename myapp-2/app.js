const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/contacts", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contacts/:id", (req, res) => {
  res.send(`<h1>Contact</h1> ${req.params.id}`);
});

app.listen(3000, () => console.log("Example app listening on port 3000"));
