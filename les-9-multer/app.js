const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempdir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempdir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

const books = [];

const booksDir = path.join(__dirname, "public", "books");

app.get("/api/books", async (req, res) => {
  res.json(books);
});

app.post("/api/books", upload.single("cover"), async (req, res) => {
  const { path: tempPath, originalname } = req.file;
  const uploadPath = path.join(booksDir, originalname);
  await fs.rename(tempPath, uploadPath);
  const cover = path.join("books", originalname);
  const newBook = { id: nanoid(), name: req.body.name, cover };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(3000, console.log("Use port: 3000"));
