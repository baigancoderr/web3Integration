const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");

// 1️⃣ Send nonce
exports.getNonce = async (req, res) => {
  const { wallet } = req.body;

  let user = await User.findOne({ walletAddress: wallet });

  if (!user) {
    user = await User.create({ walletAddress: wallet });
  }

  res.json({ nonce: user.nonce });
};

// 2️⃣ Verify signature
exports.verifySignature = async (req, res) => {
  const { wallet, signature } = req.body;

  const user = await User.findOne({ walletAddress: wallet });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const message = `Login nonce: ${user.nonce}`;
  const recovered = ethers.verifyMessage(message, signature);

  if (recovered.toLowerCase() !== wallet.toLowerCase()) {
    return res.status(401).json({ msg: "Invalid signature" });
  }

  user.nonce = Math.floor(Math.random() * 1000000);
  await user.save();

  const token = jwt.sign(
    { id: user._id, wallet: user.walletAddress },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token, wallet });
};
