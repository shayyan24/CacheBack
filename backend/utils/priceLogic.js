// Contains the logic for calculating the estimated resale price based on category and brand

function calculateResalePrice(brand, category, originalPrice) {
    const categoryDiscounts = {
    "tops": 0.6,         
    "dresses": 0.5,     
    "pants": 0.6,        
    "skirts": 0.5,       
    "outerwear": 0.8,     
    "shoes": 0.7,        
    "accessories": 0.9,  
    "other": 0.4,         
};

    const discount = categoryDiscounts[category.toLowerCase()] || 0.5;
    return originalPrice * discount;
}

module.exports = { calculateResalePrice };