import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
