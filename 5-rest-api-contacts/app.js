const express = require("express");
const logger = require("morgan");
const cors = require("cors");
global.basedir = __dirname;

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLogger));
app.use(cors());

app.use("/api/contacts", contactsRouter);

module.exports = app;
