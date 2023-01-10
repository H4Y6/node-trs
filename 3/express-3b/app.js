const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const booksRouter = require("./data/books");
const app = express();

app.use(cors());
app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = new Date().toString().slice(0, 25);
  await fs.appendFile("./server.log", `${method} ${url} ${date}\n`);
  next();
});

app.use("/api/books", booksRouter);

app.listen(3000, () => {
  console.log("Listen to port:3000");
});
