const express = require("express");

const books = require("../../models/books");

const routes = express.Router();

routes.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

routes.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = routes;
