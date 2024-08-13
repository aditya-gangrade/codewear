import React from "react";
import Image from "next/image";

const Tshirt = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Flex container to align items in a row */}
        <div className="flex flex-wrap -m-4">
          {/* T-shirt Item */}
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/oversizedtshirt.jpg"
                  width={220}
                  height={150}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tshirt;
