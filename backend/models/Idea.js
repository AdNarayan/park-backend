const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  name: String,
  idea: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Idea", IdeaSchema);
