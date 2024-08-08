"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleCheckout = () => {
    router.push(`/checkout?quantity=${quantity}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="relative w-full h-64">
          <Image
            src="/hoodie.jpg"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            alt="Product Image"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add to cart</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            itaque, esse ad est amet ratione similique aliquam repellat sunt
            necessitatibus. Ea expedita perspiciatis aliquid sed.
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            ${quantity * 120.0}
          </p>
          <div className="flex items-center mt-4 mb-6">
            <button
              onClick={handleDecrement}
              className="bg-gray-300 text-gray-800 py-1 px-3 rounded-l flex items-center"
            >
              <CiCircleMinus className="text-lg" />
            </button>
            <span className="mx-4 text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-300 text-gray-800 py-1 px-3 rounded-r flex items-center"
            >
              <CiCirclePlus className="text-lg" />
            </button>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white py-2 px-4 rounded flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <LuShoppingCart className="text-lg" />
            <span>Place Order!!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
