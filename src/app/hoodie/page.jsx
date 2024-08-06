"use client";

import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import { useRouter } from "next/navigation";

const Hoodie = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const products = [
    {
      src: "/hoodie.jpg",
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
    },
  ];

  const handleOverlayClick = (event) => {
    if (event.target.id === "overlay") {
      setOpen(true);
    }
  };

  return (
    <div>
      {open ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div
                    onClick={() => setOpen(false)}
                    className="block relative h-60 rounded overflow-hidden cursor-pointer"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.src}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div
          id="overlay"
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={handleOverlayClick}
        >
          <CartItem src={products[0].src} />
        </div>
      )}
    </div>
  );
};

export default Hoodie;
