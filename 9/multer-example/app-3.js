const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => cb(null, file.originalname),
});

const books = [];

const upload = multer({ storage: multerConfig });

const booksDir = path.join(__dirname, "public", "books");

app.get("/api/books", async (req, res) => {
  res.json(books);
});

app.post("/api/books", upload.single("cover"), async (req, res) => {
  try {
    // console.log(req.file);
    const { path: tempPath, originalname } = req.file;
    const uploadPath = path.join(booksDir, originalname);
    // console.log(tempDir, uploadPath);
    await fs.rename(tempPath, uploadPath);
    const cover = path.join("book", originalname);
    const newBook = { name: req.body.name, cover, id: nanoid() };
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    await fs.unlink(req.file.path);
  }
});

app.listen(3000, () => console.log("Listen to port: 3000"));
