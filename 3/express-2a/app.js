const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");

const moment = require("moment");

const books = require("./data/books");

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = new Date().toString().slice(0, 25);
  // const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./server.log", `${method} ${url} ${date}\n`);
  next();
});

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000, () => {
  console.log("Listen to port: 3000");
});
