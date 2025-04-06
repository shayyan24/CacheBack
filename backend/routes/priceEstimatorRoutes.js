const express = require('express');
const { calculateResalePrice } = require('../utils/priceLogic');

const router = express.Router();

router.post('/', (req, res) => {
    const { brand, category, originalPrice } = req.body;

    if (!brand || !category || !originalPrice) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const estimatedPrice = calculateResalePrice(brand, category, originalPrice);
    res.json({ estimatedPrice });
});

module.exports = router;