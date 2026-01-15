const express = require("express");
const router = express.Router();
const cryptoPriceController = require("../controllers/crypto-price.controller");

// Get all crypto prices
router.get("/crypto", cryptoPriceController.getCryptoPrices);

// Convert between cryptocurrencies
router.get("/convert", cryptoPriceController.convertCrypto);

module.exports = router;
