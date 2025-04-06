// Sets up the Express server and connects the price estimation API route

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const priceEstimatorRoutes = require('./routes/priceEstimatorRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/estimate', priceEstimatorRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});