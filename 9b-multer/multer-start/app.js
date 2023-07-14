const express = require("express");
cors = require("cors");
const path = require("path");
const fs = require("fs/promises");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");
const booksDir = path.join(__dirname, "public", "books");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.listen(3000, () => {
  console.log("Use port: 3000. ");
});
