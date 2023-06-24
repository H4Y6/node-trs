const express = require("express");

const books = require("../../models/books");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const result = await books.getAll();
  res.json(result);
});

module.exports = routes;
