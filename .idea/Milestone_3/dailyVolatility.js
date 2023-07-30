const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

app.use(express.json());

// Volatility calculation
function calculateVolatility(prices) {
    const n = prices.length;
    const mean = prices.reduce((sum, price) => sum + price, 0) / n;
    const squaredDifferences = prices.map((price) => (price - mean) ** 2);
    const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / n;
    const dailyVolatility = Math.sqrt(variance); // Square root of variance
    return dailyVolatility;
}

// Route to calculate volatility based on stock ticker
app.get('/volatility', async (req, res) => {
    const { ticker } = req.query;

    try {
        // Fetch stock data (last 30 closing prices) from Alpha Vantage API
        const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`
        );

        // Extract closing prices from API response
        const timeSeriesData = response.data['Time Series (Daily)'];
        const dates = Object.keys(timeSeriesData).slice(0, 30);
        const closingPrices = dates.map((date) => parseFloat(timeSeriesData[date]['4. close']));

        // Calculate daily volatility
        const dailyVolatility = calculateVolatility(closingPrices);

        res.json({ ticker, dailyVolatility });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data or calculate volatility.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
