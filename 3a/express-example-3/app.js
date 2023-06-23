// const express = require("express");
// const fs = require("fs/promises");
// const cors = require("cors");

// const books = require("./books");

// const app = express();

// app.use(cors());

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const currentTime = new Date();
//   await fs.appendFile(
//     "./server.log",
//     `${currentTime.toString().slice(0, 25)} ${method} ${url}\n`
//   );
//   next();
// });

// // app.use((req, res, next) => {
// //   console.log("first middleware");
// //   next();
// // });

// // app.use((req, res, next) => {
// //   console.log("second middleware");
// //   next();
// // });

// app.get("/books", (req, res) => {
//   res.json(books);
// });

// app.get("/products", (req, res) => {
//   res.json([]);
// });

// app.listen(3000);

const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(3000);
