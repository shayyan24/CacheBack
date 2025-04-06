function calculateResalePrice(brand, category, originalPrice) {
    // Example logic: Adjust percentages based on category or brand
    const categoryDiscounts = {
        "luxury": 0.7,
        "casual": 0.5,
        "sportswear": 0.6,
    };

    const discount = categoryDiscounts[category.toLowerCase()] || 0.5;
    return originalPrice * discount;
}

module.exports = { calculateResalePrice };