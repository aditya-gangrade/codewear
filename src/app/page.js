import React from "react";
import Carousel from "@/components/Carousel";

const App = () => {
  const images = [
    "./hoodie.jpg",
    "./oversizedtshirt.jpg",
    "./resize-17241563502117136776tshirtback.jpg",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Carousel images={images} />
    </div>
  );
};

export default App;