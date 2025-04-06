require('dotenv').config();

// Sets up the Express server and connects the price estimation API route

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const priceEstimatorRoutes = require('./routes/priceEstimatorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Log the FRONTEND_URL to verify it's being loaded
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

// middleware
const allowedOrigins = [
    'http://localhost:3000', // Local development
    'https://cache-back-demo.vercel.app', // Deployed frontend
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
}));
app.use(bodyParser.json());

// Routes
app.use('/api/estimate', priceEstimatorRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});