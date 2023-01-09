const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");

const booksRouter = require("./routes/api/books");

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = new Date().toString().slice(0, 25);
  await fs.appendFile("server.log", `${method} ${url} ${date}\n`);
  next();
});

app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000, () => {
  console.log("Use port 3000");
});
