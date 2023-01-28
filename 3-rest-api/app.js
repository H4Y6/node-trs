const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLogger));

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

module.exports = app;
