const express = require("express");
const { v4: uuidv4 } = require("uuid");
const items = require("../data/items");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newItem = { id: uuidv4(), name };
  items.push(newItem);

  res.status(201).json(newItem);
});

module.exports = router;
