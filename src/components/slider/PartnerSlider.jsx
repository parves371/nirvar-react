import React, { useState } from "react";
import Slider from "react-slick";

// ... other imports

export const PartnerSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider ref={setSliderRef} {...settings}>
        <div>
          <img src="https://img.freepik.com/free-vector/green-hand-drawn-partnership-clipart_53876-115985.jpg?ga=GA1.1.1982624528.1727324533&semt=ais_siglip" alt="WellCare" />
          <p>Health Plans</p>
        </div>
        <div>
          <img src="https://example.com/medical1.png" alt="Medical 1" />
          <p>Medical</p>
        </div>
        <div>
          <img src="https://example.com/sensile.png" alt="Sensile Medical" />
          <p>Medical</p>
        </div>
        <div>
          <img src="https://example.com/medical2.png" alt="Medical 2" />
          <p>Medical Tagline Here</p>
        </div>
      </Slider>
    </div>
  );
};
