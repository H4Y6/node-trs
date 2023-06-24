const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;
