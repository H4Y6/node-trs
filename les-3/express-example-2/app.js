const express = require("express");

const books = require("../books");

const app = express();

app.get("/books", (req, res) => {
  res.json(books);
  // res.send(books);
});

app.listen(3000, () => {
  console.log("Listen to port: 3000");
});
