const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const tempDir = path.join(__dirname, "temp");

const storage = multer.diskStorage({
  dest: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.listen(3000, console.log("listen to port: 3000"));
