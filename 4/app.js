const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const booksRouter = require("./models/books");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));

app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ messagr: "Not found" });
});
