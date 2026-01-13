const Purchase = require("../models/Purchase.model");
const { MGX_PRICE_USDT } = require("../config/price");

exports.recordPayment = async (req, res) => {
  const { wallet, amount, token, txHash } = req.body;

  const mgx = amount / MGX_PRICE_USDT;

  const purchase = await Purchase.create({
    wallet,
    payToken: token,
    amountPaid: amount,
    mgxAmount: mgx,
    txHash
  });

  res.json({
    msg: "Payment recorded",
    mgx,
    purchase
  });
};
