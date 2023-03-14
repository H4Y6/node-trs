const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const books = require("../books");
const moment = require("moment");
const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  // const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  const date = new Date().toString().slice(0, 25);
  await fs.appendFile("./server.log", `${date} ${method} ${url}\n`);
  next();
});

app.use(cors());

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/products", (req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  res.json([]);
});

app.listen(3000, () => {
  console.log("Use port: 3000");
});
