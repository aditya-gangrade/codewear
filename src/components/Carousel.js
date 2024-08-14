import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        
          <div >
            <Image
             src={'./carousel.jpeg'}
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          </div>
      </Slider>
    </div>
  );
};
export default Carousel;