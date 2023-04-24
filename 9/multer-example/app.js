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
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

const books = [];

const booksDir = path.join("public", "books");

app.get("/api/books", async (req, res) => {
  res.json(books);
});

app.delete("/api/books/:id", async (req, res) => {
  const { id } = req.params;
  const i = books.findIndex((b) => b.id === id);
  if (i === -1) {
    return null;
  }
  [dele] = books.splice(i, 1);
  res.json(dele);
  // res.status(204).send();
});

app.delete("/api/books", async (req, res) => {
  const books = [];
  res.json("All books deleted");
});

app.post("/api/books", upload.single("cover"), async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    // await fs.rename("./temp/cover.jpg", "./public/books/cover.jpg");
    const { path: tempPath, originalname } = req.file;
    const uploadPath = path.join(booksDir, originalname);
    // console.log(tempPath, uploadPath);
    // await fs.rename(req.file.path, uploadPath);
    await fs.rename(tempPath, uploadPath);
    const cover = path.join("books", originalname);
    const newBook = { name: req.body.name, cover, id: nanoid() };
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    await fs.unlink(req.file.path);
  }
});

app.listen(3000, () => {
  console.log("listening to port: 3000");
});
