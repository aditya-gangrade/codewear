"use client";

import { LuShoppingCart } from "react-icons/lu";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ src }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded">
      <div className="mb-6">
        <Image src={src} width={320} height={420} alt="Cart Item" />
      </div>
      <div className="flex justify-center">
        <Link href="/cart">
          <button className="bg-our-theme text-white py-2 px-5 rounded flex items-center gap-2 transition-colors hover:bg-our-theme-dark">
            <LuShoppingCart className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
