const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


// Routes
const issuesRoute = require("./routes/issues");
const ideasRoute = require("./routes/ideas");
const volunteersRoute = require("./routes/volunteers");

console.log("issuesRoute:", issuesRoute);
console.log("ideasRoute:", ideasRoute);
console.log("volunteersRoute:", volunteersRoute);

app.use("/api/issues", issuesRoute);
app.use("/api/ideas", ideasRoute);
app.use("/api/volunteers", volunteersRoute);


app.get("/", (req, res) => {
  res.send("ParkCare backend running 🚀");
});

// Database connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();

