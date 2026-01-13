const router = require("express").Router();
const { getNonce, verifySignature } = require("../controllers/auth.controller");

router.post("/nonce", getNonce);
router.post("/verify", verifySignature);

module.exports = router;
