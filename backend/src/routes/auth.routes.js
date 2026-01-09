const express = require("express");
const router = express.Router();

// ✅ CORRECT IMPORT
const {
  getNonce,
  verifySignature,
  tempWalletLogin
} = require("../controllers/auth.controller");

// ROUTES
router.post("/nonce", getNonce);
// router.post("/verify", verifySignature);

// agar temp login banaya hai
router.post("/temp-login", tempWalletLogin);

module.exports = router;
