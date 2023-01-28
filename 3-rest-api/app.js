const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLogger));

app.use(cors());

module.exports = app;
