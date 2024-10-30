import React from "react";
import { TitleBaack } from "./tittle-back";
import TestimonialCard from "./testimonial-card";

export const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <TitleBaack back={"Testimonials"} front={"Testimonials"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};
