"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Home() {

  // form for information (3 fields as required)
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    originalPrice: "",
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setResult(null)
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch the estimated price")
      }

      const data = await response.json()
      setResult(data.estimatedPrice)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Common categories for dropdown
  const categories = [
    "Select category",
    "Tops",
    "Dresses",
    "Pants",
    "Skirts",
    "Outerwear",
    "Shoes",
    "Accessories",
    "Other",
  ]


  // page
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 border border-green-100">
        <h1 className="text-2xl font-medium text-green-800 mb-6 text-center">Resale Price Estimator</h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Brand name field */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-green-700">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-2.5 bg-green-50 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 transition-all text-green-900"
              placeholder="Enter brand name"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-green-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2.5 bg-green-50 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 transition-all text-green-900"
              required
            >
              {/* category list */}
              {categories.map((category, index) => (
                <option
                  key={index}
                  value={index === 0 ? "" : category}
                  disabled={index === 0}
                  className={index === 0 ? "text-green-700" : "text-green-900"}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
              
              {/* OG price from user */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-green-700">Original Price ($)</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="w-full p-2.5 bg-green-50 border border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 transition-all text-green-900"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Estimate Price <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium text-center">
              Estimated Resale Price: <span className="text-xl">${result}</span>
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

