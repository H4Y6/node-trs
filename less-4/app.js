const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const booksRouter = require("./router/api/books");
const { json } = require("express");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger.formatsLogger);
app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Use port: 3000 ");
});

module.exports = app;
