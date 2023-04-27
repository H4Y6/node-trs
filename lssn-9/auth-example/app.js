const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs/promises");

global.basedir = __dirname;

const booksRouter = require("./routes/api/books");
const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(async (req, _, next) => {
  const date = new Date().toString().slice(0, 25);
  const { method, url } = req;
  await fs.appendFile(".server.log", `\n ${date} ${method} ${url}`);
  next();
});

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
