const axios = require('axios');

const apiUrl = 'http://example.com/risk-free-rate'; // Replace with the actual API endpoint URL

axios.get(apiUrl)
    .then((response) => {
        const riskFreeRate = response.data.rate; // Assuming the API returns the rate in a "rate" field
        console.log('Current risk-free rate:', riskFreeRate);
    })
    .catch((error) => {
        console.error('Error fetching risk-free rate:', error.message);
    });
