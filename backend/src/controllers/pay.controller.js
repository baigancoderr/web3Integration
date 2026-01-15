const axios = require("axios");

// Map frontend tokens to NOWPayments currency codes
const currencyMap = {
  BNB: "bnbbsc",    // Binance Smart Chain BNB
  ETH: "eth",        // Ethereum
  SOL: "sol",        // Solana
  USDT: "usdttrc20"  // USDT TRC20
};

exports.createPayment = async (req, res) => {
  try {
    const { amount, wallet, token } = req.body;

    console.log("🔍 Payment Request:", { amount, wallet, token });

    if (!process.env.NOWPAYMENTS_API_KEY) {
      return res.status(500).json({ error: "NOWPayments API key not configured" });
    }

    // Convert token to NOWPayments currency code
    const payCurrency = currencyMap[token] || token.toLowerCase();
    console.log(`💱 Converting ${token} → ${payCurrency}`);

    const response = await axios.post(
      "https://api.nowpayments.io/v1/invoice",
      {
        price_amount: amount,
        price_currency: "usd",
        pay_currency: payCurrency, 
        order_id: "MGX_" + Date.now(),
        order_description: "MGX Presale Purchase",
        ipn_callback_url: "https://unremuneratively-motionless-darcie.ngrok-free.dev/api/pay/webhook",
        success_url: "http://localhost:3000/dashboard",
        cancel_url: "http://localhost:3000/buy"
      },
      {
        headers: {
          "x-api-key": process.env.NOWPAYMENTS_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ NOWPayments Full Response:", JSON.stringify(response.data, null, 2));

    // NOWPayments returns invoice_url in the response
    const paymentUrl = response.data.invoice_url || response.data.payment_url;
    
    if (!paymentUrl) {
      console.error("❌ No payment URL in response:", response.data);
      return res.status(500).json({ error: "Payment URL not generated" });
    }

    res.json({
      paymentUrl: paymentUrl
    });
  } catch (error) {
    console.error("❌ Payment Error:", error.response?.data || error.message);
    res.status(500).json({ 
      error: error.response?.data?.message || "Payment creation failed",
      details: error.response?.data
    });
  }
};

exports.webhook = async (req, res) => {
  const payment = req.body;

  if (payment.payment_status === "finished") {
    // 1️⃣ verify order_id
    // 2️⃣ find user
    // 3️⃣ credit MGX tokens
    // 4️⃣ save transaction
  }

  res.sendStatus(200);
};
