const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
global.basedir = __dirname;

const fs = require("fs/promises");

const booksRouter = require("./routes/api/books");
const authRouter = require("./routes/api/auth");

const app = express();

app.use(async (req, res, next) => {
  const date = new Date().toString().slice(0, 24);
  const { method, url } = req;
  await fs.appendFile(".server.log", `${date} ${method} ${url}\n`);
  next();
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

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
