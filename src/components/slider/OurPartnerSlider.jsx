import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "../home/testimonial-card";
import { Pagination } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    image:
      "https://www.wellcare.com/-/media/logos-and-icons/wellcare-logos/wellcarelogo180.ashx",
  },
  {
    id: 2,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
  {
    id: 3,
    image:
      "https://www.deasnet.it/wp-content/themes/abc-wpml-grid/i/deas-logo.svg",
  },
  {
    id: 4,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
  {
    id: 45,
    image: "https://medlineplus.gov/images/m_logo_25.png",
  },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={20}
      loop
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {testimonialData.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="flex justify-center items-center">
            <img
              className="w-72 h-16 bg-cover"
              src={testimonial.image}
              alt=""
            />
          </div>{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
