// Contains the logic for calculating the estimated resale price based on category and brand

function calculateResalePrice(brand, category, originalPrice) {
    const categoryDiscounts = {
        "tops": 0.6,         
        "dresses": 0.5,     
        "pants": 0.6,        
        "skirts": 0.5,       
        "outerwear": 0.8,     
        "shoes": 0.9,        
        "accessories": 0.8,  
        "other": 0.4,         
};

    const brandMultipliers = {
        "nike": 1.15,
        "adidas": 1.0,
        "gucci": 1.2,
        "prada": 1,
        "zara": 0.8,
        "h&m": 0.7,
        "puma": 0.7,
        "louis vuitton": 1.3,
        "supreme": 1.6,
        "chanel": 1.2,
        "other": 1.0
};

const discount = categoryDiscounts[category.toLowerCase()] || 0.5;
const multiplier = brandMultipliers[brand.toLowerCase()] || brandMultipliers["other"];
return originalPrice * discount * multiplier;
}

module.exports = { calculateResalePrice };