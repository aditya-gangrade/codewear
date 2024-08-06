import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-navbar-color p-4 font-sans text-white z-50">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image src="/logo.png" width={160} height={140} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-3 p-2">
            <li>
              <Link className="" href="/tshirt">
                Tshirts
              </Link>
            </li>
            <li>
              <Link href="/mug">Mugs</Link>
            </li>
            <li>
              <Link href="/sticker">Stickers</Link>
            </li>
            <li>
              <Link href="/hoodie">Hoodies</Link>
            </li>
          </ul>
        </div>
        <div className="space-x-3 m-2">
          <Link href={"/login"}>
            {" "}
            <button>Login</button>
          </Link>
          <Link href={"/signup"}>
            {" "}
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
