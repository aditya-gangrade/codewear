'use client'
import React, { useEffect, useState } from 'react';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("/api/favorite");
        const result = await response.json();
        setFavorites(result.favorites || []);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const formatPrice = (price) => {
    if (typeof price === 'number' && !isNaN(price)) {
      return price.toFixed(2);
    }
    return '0.00'; // Default value or handle the case when price is not a valid number
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 px-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {favorites.map((fav) => (
          <div key={fav._id} className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-full p-4">
            <div className="block relative h-60 rounded overflow-hidden">
              <img
                alt={fav.title}
                className="object-cover object-center w-full h-full"
                src={fav.imageUrl}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {fav.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {fav.title}
              </h2>
              <p className="mt-1">${formatPrice(fav.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
