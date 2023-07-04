const express = require("express");
const cors = require("cors");
require("dotenv").config();

global.basedir = __dirname;

const logger = require("morgan");

const booksRouter = require("./routes/api/books");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message });
});

module.exports = app;
