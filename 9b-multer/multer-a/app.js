const expressm = require("express");
const cors = require("cors");
const path = require("path");
const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const multer = require("multer");

const app = expressm();

app.use(cors());
app.use(expressm.json());
app.use(expressm.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

const books = [];
const booksDir = path.join(__dirname, "public", "books");

app.get("/api/books", (req, res) => {
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
  try {
  } catch (error) {
    await fs.unlink(req.file.path);
  }
});

app.listen(3000, () => {
  console.log("Use port: 3000");
});
