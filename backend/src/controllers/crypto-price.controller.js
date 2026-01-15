const axios = require("axios");
const { MGX_PRICE_USDT } = require("../config/price");

// CoinGecko IDs for different cryptocurrencies
const CRYPTO_IDS = {
  BNB: "binancecoin",
  ETH: "ethereum",
  SOL: "solana",
  USDT: "tether"
};

// Fallback prices (approximate market prices)
const FALLBACK_PRICES = {
  BNB: 650,
  ETH: 3500,
  SOL: 150,
  USDT: 1,
  MGX: MGX_PRICE_USDT
};

// Cache for prices (to reduce API calls)
let priceCache = {
  prices: null,
  timestamp: null
};

const CACHE_DURATION = 30000; // 30 seconds

/**
 * Get live crypto prices from CoinGecko with retry and fallback
 * @route GET /api/prices/crypto
 */
exports.getCryptoPrices = async (req, res) => {
  try {
    const { amount } = req.query; // Optional: USD amount to convert
    
    // Check cache first
    const now = Date.now();
    if (priceCache.prices && priceCache.timestamp && (now - priceCache.timestamp < CACHE_DURATION)) {
      console.log("📦 Using cached prices");
      const prices = priceCache.prices;
      
      let conversions = null;
      if (amount) {
        const usdAmount = parseFloat(amount);
        const mgxAmount = usdAmount / MGX_PRICE_USDT;
        conversions = {
          usd: usdAmount,
          mgx: mgxAmount,
          youPay: {
            BNB: usdAmount / prices.BNB,
            ETH: usdAmount / prices.ETH,
            SOL: usdAmount / prices.SOL,
            USDT: usdAmount / prices.USDT
          }
        };
      }
      
      return res.json({
        success: true,
        prices,
        conversions,
        mgxPrice: MGX_PRICE_USDT,
        timestamp: new Date(priceCache.timestamp).toISOString(),
        cached: true
      });
    }

    // Fetch fresh prices with timeout
    const ids = Object.values(CRYPTO_IDS).join(",");
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
      { timeout: 5000 } // 5 second timeout
    );

    const prices = {
      BNB: response.data.binancecoin?.usd || FALLBACK_PRICES.BNB,
      ETH: response.data.ethereum?.usd || FALLBACK_PRICES.ETH,
      SOL: response.data.solana?.usd || FALLBACK_PRICES.SOL,
      USDT: response.data.tether?.usd || 1,
      MGX: MGX_PRICE_USDT
    };

    // Update cache
    priceCache.prices = prices;
    priceCache.timestamp = now;

    // If amount is provided, calculate how much crypto needed
    let conversions = null;
    if (amount) {
      const usdAmount = parseFloat(amount);
      const mgxAmount = usdAmount / MGX_PRICE_USDT;

      conversions = {
        usd: usdAmount,
        mgx: mgxAmount,
        youPay: {
          BNB: usdAmount / prices.BNB,
          ETH: usdAmount / prices.ETH,
          SOL: usdAmount / prices.SOL,
          USDT: usdAmount / prices.USDT
        }
      };
    }

    res.json({
      success: true,
      prices,
      conversions,
      mgxPrice: MGX_PRICE_USDT,
      timestamp: new Date().toISOString(),
      cached: false
    });
  } catch (error) {
    console.error("❌ Price fetch error:", error.message);
    
    // Use fallback prices on error
    console.log("⚠️ Using fallback prices due to API error");
    
    const prices = FALLBACK_PRICES;
    const { amount } = req.query;
    
    let conversions = null;
    if (amount) {
      const usdAmount = parseFloat(amount);
      const mgxAmount = usdAmount / MGX_PRICE_USDT;
      conversions = {
        usd: usdAmount,
        mgx: mgxAmount,
        youPay: {
          BNB: usdAmount / prices.BNB,
          ETH: usdAmount / prices.ETH,
          SOL: usdAmount / prices.SOL,
          USDT: usdAmount / prices.USDT
        }
      };
    }
    
    res.json({
      success: true,
      prices,
      conversions,
      mgxPrice: MGX_PRICE_USDT,
      timestamp: new Date().toISOString(),
      fallback: true,
      warning: "Using approximate prices due to temporary API unavailability"
    });
  }
};

/**
 * Get conversion rate for specific crypto
 * @route GET /api/prices/convert
 */
exports.convertCrypto = async (req, res) => {
  try {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({
        error: "Missing parameters: from, to, amount required"
      });
    }

    const fromId = CRYPTO_IDS[from.toUpperCase()];
    const toId = CRYPTO_IDS[to.toUpperCase()];

    if (!fromId && from.toUpperCase() !== "MGX") {
      return res.status(400).json({ error: `Invalid 'from' currency: ${from}` });
    }

    if (!toId && to.toUpperCase() !== "MGX") {
      return res.status(400).json({ error: `Invalid 'to' currency: ${to}` });
    }

    let fromPrice, toPrice;

    if (from.toUpperCase() === "MGX") {
      fromPrice = MGX_PRICE_USDT;
    } else {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${fromId}&vs_currencies=usd`
      );
      fromPrice = response.data[fromId]?.usd;
    }

    if (to.toUpperCase() === "MGX") {
      toPrice = MGX_PRICE_USDT;
    } else {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${toId}&vs_currencies=usd`
      );
      toPrice = response.data[toId]?.usd;
    }

    const usdValue = parseFloat(amount) * fromPrice;
    const converted = usdValue / toPrice;

    res.json({
      success: true,
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      amount: parseFloat(amount),
      converted: converted,
      usdValue: usdValue,
      rates: {
        [from.toUpperCase()]: fromPrice,
        [to.toUpperCase()]: toPrice
      }
    });
  } catch (error) {
    console.error("❌ Conversion error:", error.message);
    res.status(500).json({
      success: false,
      error: "Conversion failed",
      message: error.message
    });
  }
};
