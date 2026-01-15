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
// Payment routes (old dummy - for testing)
app.use("/api/payment", require("./routes/payment.routes"));
// Pay routes (NOWPayments integration)
app.use("/api/pay", require("./routes/pay.routes"));
// Crypto price routes (live prices API)
app.use("/api/prices", require("./routes/crypto-price.routes"));



module.exports = app;
