"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HoodiePage = () => {
  const [isFavorite, setIsFavorite] = useState(false); // Assuming initially it's not favorite

  const toggleFavorite = async () => {
    try {
      const response = await fetch("/api/favorite", {
        method: isFavorite ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: "the-product-id" }), 
      });

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to update favorites");
      }

      const newFavoriteState = !isFavorite;
      setIsFavorite(newFavoriteState);

      toast(newFavoriteState ? "Added to Favorites!" : "Removed from Favorites!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating Favorites!");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-60 rounded overflow-hidden cursor-pointer">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/hoodie.jpg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="/cart">
                  <button className="bg-our-theme text-white py-2 px-5 rounded flex items-center gap-2 transition-colors hover:bg-our-theme-dark">
                    <LuShoppingCart className="text-lg" />
                    <span>Add to Cart</span>
                  </button>
                </Link>
                <button
                  onClick={toggleFavorite}
                  aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                  className="flex items-center justify-center p-2 rounded transition-colors hover:bg-gray-200"
                >
                  {isFavorite ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <CiHeart className="text-gray-500 text-lg" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default HoodiePage;
