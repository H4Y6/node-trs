const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: multerConfig });

app.post("/api/books", upload.single("cover"), (req, res) => {
  console.log({ reqBody: req.body });
  console.log({ reqFile: req.file });
});

app.listen(3000, () => console.log("Listening to port: 3000"));
