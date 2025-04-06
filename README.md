# Cache Back 💰

Ready to make some ~~Cash~~ Cache Back? 

Cache Back is a resale price estimator app designed to help users discover the hidden value of their fashion items. By entering details like the brand, category, and original price of an item, users can get an estimated resale price instantly. The app is built with a modern tech stack, combining a **Next.js** frontend and a **Node.js** backend.

## Demo / How to set it up

This project is deployed on Vercel! Check out the live demo here: [Cache Back, Deployed using Vercel](https://cache-back-demo.vercel.app/)  

## How It Works

 **What to Input?**: 
     - **Brand**: The brand of the item (e.g., Nike, Gucci).
     - **Category**: The type of item (e.g., Shoes, Tops, Accessories).
     - **Original Price**: The original purchase price of the item.

### **How the Resale Price is Calculated**
The resale price is calculated using the item's **category** and **brand**:

1. **Category Discounts**:
   - Each category has a predefined discount rate representing how much value the item retains. For example:
     - Shoes: 90%
     - Dresses: 50%
     - Accessories: 80%

2. **Brand Multipliers**:
   - Popular brands like Nike, Gucci, and Louis Vuitton have higher multipliers to reflect their higher resale value.
   - Lower-tier brands like Zara and H&M have lower multipliers.

3. **Formula**:
   - Resale Price = Original Price × Category Discount × Brand Multiplier

 **Result Display**:
   - The estimated resale price is returned by the backend and displayed on the frontend.
   - If an error occurs (e.g., missing fields or server issues), an error message is shown.

Thank you for checking out Cache Back!
