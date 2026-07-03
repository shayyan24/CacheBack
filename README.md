# Cache Back 💰

Ready to make some ~~Cash~~ Cache Back? 

Cache Back is a resale price estimator app designed to help users discover the hidden value of their fashion items. By entering details like the brand, category, and original price of an item, users can get an estimated resale price instantly. The app is built with a modern tech stack, combining a **Next.js** frontend and a **Node.js** backend.

## Demo / How to set it up

This project is deployed on Vercel! Check out the live demo here: [Cache Back, Deployed using Vercel](https://cache-back-demo.vercel.app/)  


 **What to Input?**: 
     - **Brand**: The brand of the item (e.g., Nike, Gucci).
     - **Category**: The type of item (e.g., Shoes, Tops, Accessories).
     - **Original Price**: The original purchase price of the item.
### **How the API Works**
1. **Endpoint**:  
   The backend exposes a `POST` endpoint at `/api/estimate`.

2. **Request**:  
   The frontend sends a `POST` request with the following data:
   ```json
   {
       "brand": "Nike",
       "category": "Shoes",
       "originalPrice": 100
   }

Thank you for checking out Cache Back!
