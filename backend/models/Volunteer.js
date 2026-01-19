const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: String,
  role: String,
  contact: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
