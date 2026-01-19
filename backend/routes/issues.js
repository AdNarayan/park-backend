const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

router.post("/", async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: "Failed to create issue" });
  }
});

router.get("/", async (req, res) => {
  const issues = await Issue.find().sort({ createdAt: -1 });
  res.json(issues);
});

module.exports = router;
