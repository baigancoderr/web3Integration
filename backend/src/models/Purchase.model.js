const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  wallet: String,
  payToken: String, // BNB or USDT
  amountPaid: Number,
  mgxAmount: Number,
  txHash: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Purchase", purchaseSchema);
