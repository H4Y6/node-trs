const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const app = express();

const books = require("./books");

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  // const date = new Date().toString().slice(0, 25);
  await fs.appendFile("server.log", `${method} ${url} ${date}\n`);
  next();
});

app.get("/books", (req, res) => {
  res.json(books);
  // res.json(null);
  // res.send(books);
  // res.send(null);
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000, console.log("3000"));
