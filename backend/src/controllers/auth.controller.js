const User = require("../models/User.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");


exports.getNonce = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    if (!walletAddress)
      return res.status(400).json({ msg: "Wallet address required" });

    let user = await User.findOne({ walletAddress });

    const nonce = crypto.randomBytes(16).toString("hex");

    if (!user) {
      user = await User.create({ walletAddress, nonce });
    } else {
      user.nonce = nonce;
      await user.save();
    }

    res.json({ nonce });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

/**
 * STEP-2: Verify Signature
 */
// exports.verifySignature = async (req, res) => {
//   try {
//     const { walletAddress, signature } = req.body;
//     if (!walletAddress || !signature)
//       return res.status(400).json({ msg: "Missing data" });

//     const user = await User.findOne({ walletAddress });
//     if (!user)
//       return res.status(404).json({ msg: "User not found" });

//     const signer = ethers.verifyMessage(user.nonce, signature);

//     if (signer.toLowerCase() !== walletAddress.toLowerCase()) {
//       return res.status(401).json({ msg: "Invalid signature" });
//     }

//     const token = jwt.sign(
//       { id: user._id, walletAddress, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     user.nonce = crypto.randomBytes(16).toString("hex");
//     await user.save();

//     res.json({
//       token,
//       user: {
//         walletAddress: user.walletAddress,
//         role: user.role
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };


exports.tempWalletLogin = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    if (!walletAddress)
      return res.status(400).json({ msg: "Wallet address required" });

    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = await User.create({ walletAddress });
    }

    const token = jwt.sign(
      {
        id: user._id,
        walletAddress: user.walletAddress,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // short expiry
    );

    res.json({
      temp: true,
      token,
      user: {
        walletAddress: user.walletAddress,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
