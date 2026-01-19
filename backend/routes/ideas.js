const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

router.post("/", async (req, res) => {
  try {
    const idea = await Idea.create(req.body);
    res.status(201).json(idea);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit idea" });
  }
});

router.get("/", async (req, res) => {
  const ideas = await Idea.find().sort({ createdAt: -1 });
  res.json(ideas);
});

module.exports = router;
