const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/", async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(500).json({ error: "Failed to register volunteer" });
  }
});

router.get("/", async (req, res) => {
  const volunteers = await Volunteer.find().sort({ createdAt: -1 });
  res.json(volunteers);
});

module.exports = router;
