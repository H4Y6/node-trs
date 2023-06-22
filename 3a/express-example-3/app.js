const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000);
