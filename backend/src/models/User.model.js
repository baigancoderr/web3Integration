const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  nonce: {
    type: Number,
    default: Math.floor(Math.random() * 1000000)
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
