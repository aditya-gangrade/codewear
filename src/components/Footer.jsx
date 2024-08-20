import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Aditya Gangrade™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link className=" hover:underline me-4 md:me-6" href={"/about"}>About</Link>
            </li>
            <li>
              <Link className=" hover:underline me-4 md:me-6" href={"/about"}>About</Link>
            </li>
            <li>
              <Link className=" hover:underline me-4 md:me-6"href={"/about"}>About</Link>
            </li>
            <li>
              <Link className=" hover:underline me-4 md:me-6"href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
