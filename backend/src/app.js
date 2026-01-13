const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running!"); // Visiting localhost:5000 will show this
});

// Auth routes
app.use("/api/auth", require("./routes/auth.routes"));

module.exports = app;
