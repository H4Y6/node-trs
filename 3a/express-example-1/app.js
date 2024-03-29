// const express = require("express");

// const app = express(); //app = web-server

// app.listen(3000, () => console.log("Server is running"));

// app.get("/", (req, res) => {
//   console.log(req.method);
//   console.log(req.url);
//   res.send("<h2>Home page</h2>");
// });

// app.get("/contacts", (req, res) => {
//   console.log(req.method);
//   console.log(req.url);
//   res.send("<h2>Contact page</h2>");
// });

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const { method, url } = req;

  res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => {
  console.log(req.method, req.url);
  res.send("<h2>Contact page</h2>");
});

app.listen(3000, () => {
  console.log("Server`s running.");
});
