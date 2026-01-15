const express = require("express");
const router = express.Router();
const { createPayment, webhook } = require("../controllers/pay.controller");

router.post("/buy", createPayment);
router.post("/webhook", webhook);

module.exports = router;
