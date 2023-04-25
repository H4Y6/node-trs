const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

global.basedir = __dirname;

const app = express();

app.use(cors());
app.use(express.json());

const avatarsDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: avatarsDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

app.post("/api/books", upload.single("cover"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

app.listen(3000, () => {
  console.log("Listen to port: 3000");
});
