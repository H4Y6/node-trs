const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const booksRouter = require("./routes/api/books");

const app = express();
const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));

app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  // app.use((err, _, res, __) => {
  // const { status = 500, message = "Server error" } = err;
  // res.status(status).json({ message });

  // res.status(500).json({ message: err.message });

  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
