const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Issue", IssueSchema);
