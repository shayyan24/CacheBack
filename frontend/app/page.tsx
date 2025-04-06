"use client"

import type React from "react"

import { useState } from "react"

// arrowright not used but here if needed
import { ArrowRight, DollarSign, ShoppingBag, Tag, Sparkles, Shirt } from "lucide-react"

export default function Home() {

  // Form stuff
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    originalPrice: "",
  })
  const [result, setResult] = useState(null) // Result for estimated price
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/estimate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch the estimated price");
      }

      const data = await response.json();
      setResult(data.estimatedPrice);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // categories for dropdown
  const categories = [
    "Select category", // initial text
    "Tops",
    "Dresses",
    "Pants",
    "Skirts",
    "Outerwear",
    "Shoes",
    "Accessories",
    "Other",
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="absolute top-10 right-10 floating">
        <Shirt className="h-16 w-16 text-emerald-500 opacity-20" />
      </div>
      <div className="absolute bottom-10 left-10 floating" style={{ animationDelay: "2s" }}>
        <ShoppingBag className="h-12 w-12 text-emerald-500 opacity-20" />
      </div>

      <div className="max-w-md w-full">
        {/* title */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold text-black mb-1"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
          >
            <span className="text-green-500">Cache</span> Back 💰
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Want to estimate your closet's worth? Look no further!
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="flex items-center text-sm font-medium text-emerald-700 mb-1.5">
                <Tag className="h-4 w-4 mr-2" />
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 bg-white/70 border border-emerald-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-emerald-900"
                placeholder="Enter brand name"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center text-sm font-medium text-emerald-700 mb-1.5">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 bg-white/70 border border-emerald-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-emerald-900"
                required
              >
                {categories.map((category, index) => (
                  <option
                    key={index}
                    value={index === 0 ? "" : category}
                    disabled={index === 0}
                    className={index === 0 ? "text-emerald-700" : "text-emerald-900"}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center text-sm font-medium text-emerald-700 mb-1.5">
                <DollarSign className="h-4 w-4 mr-2" />
                Original Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-700">$</span>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="w-full p-3 pl-7 bg-white/70 border border-emerald-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-emerald-900"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 gradient-button text-white py-3.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  Estimate Price 🤔 {/* Emoji on top always fr. but arrow here if needed : <ArrowRight className="w-4 h-4" /> */} 
                </>
              )}
            </button>
          </form>
        </div>

        {result && (
          <div className="glass-card rounded-2xl p-6 text-center">
            <Sparkles className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
            <h3 className="text-lg font-medium text-emerald-700 mb-1">Your item is worth</h3>
            <p className="text-3xl font-bold text-emerald-800">${result}</p>
            <p className="text-sm text-emerald-600 mt-2">Based on current market trends</p>
          </div>
        )}

        {error && (
          <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

