"use client";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 m-10 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="px-4 py-6 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
          <div className="image "></div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
