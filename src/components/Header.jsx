"use client";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [progress, setProgress] = useState(0);
  const [heart, setHeart] = useState(true);
  const router = useRouter();

  const handleHeartClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setHeart(!heart);
    router.push("/favorite"); // Programmatically navigate
  };

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="fixed top-0 left-0 w-full bg-navbar-color p-4 font-sans text-white z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                width={160}
                height={140}
                alt="Logo"
                className="w-32 h-auto sm:w-40"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-3 p-2">
              <li>
                <Link href="/hoodie">Hoodies</Link>
              </li>
              <li>
                <Link href="/tshirt">Tshirts</Link>
              </li>
              <li>
                <Link href="/mug">Mugs</Link>
              </li>
              <li>
                <Link href="/sticker">Stickers</Link>
              </li>
            </ul>
          </div>

          {/* Icons and Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleHeartClick}
              className="flex items-center bg-transparent border-none"
            >
              {heart ? (
                <CiHeart className="text-red-500 text-xl" />
              ) : (
                <FaHeart className="text-gray-500 text-xl" />
              )}
            </button>

            <Link href="/login">
              <button className="px-4 py-2 hidden md:block">Login</button>
            </Link>

            <Link href="/signup">
              <button className="px-4 py-2 hidden md:block">Signup</button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="block md:hidden mt-4">
          <ul className="flex flex-col space-y-2 p-2">
            <li>
              <Link href="/hoodie">Hoodies</Link>
            </li>
            <li>
              <Link href="/tshirt">Tshirts</Link>
            </li>
            <li>
              <Link href="/sticker">Stickers</Link>
            </li>{" "}
            <li>
              <Link href="/mug">Mugs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
