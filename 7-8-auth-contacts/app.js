const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");

global.basedir = __dirname;

const fs = require("fs/promises");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = new Date().toLocaleString();
  await fs.appendFile(".server.log", `${method} ${url} ${date}\n`);
  next();
});

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   //   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   const date = new Date().toString().slice(0, 25);
//   await fs.appendFile("server.log", `${method} ${url} ${date}\n `);
//   next();
// });

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
