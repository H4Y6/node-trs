// const express = require("express");
// const books = require("./books");

// const app = express();

// app.set("json spacees", 8);

// app.get("/books", (req, res) => {
//   res.json(books);
//   // res.send(books);
// });

// app.listen(3000);

const express = require("express");

const books = require("./books");

const app = express();

// app.set("json spaces", 12);

app.get("/books", (req, res) => {
  // res.send(books);
  // res.send(null);
  // res.json(null);
  res.json(books);
});

app.listen(3000);
