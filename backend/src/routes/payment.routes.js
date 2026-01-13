const router = require("express").Router();
const { recordPayment } = require("../controllers/payment.controller");

router.post("/buy", recordPayment);

module.exports = router;
