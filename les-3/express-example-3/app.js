const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const books = require("../books");
const moment = require("moment");
const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./server.log", `${method} ${url} ${date}\n`);
  next();
});

app.use(cors());
// app.use(async (req, res, next) => {
//   console.log("First middleware");
//   next();
// });
// app.use(async (req, res, next) => {
//   console.log("Second middleware");
//   next();
// });

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/products", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.json([]);
});

app.listen(3000, () => {
  console.log("Use port: 3000");
});
