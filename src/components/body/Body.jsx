import React from "react";
import Header from "../header/Header";
import WhyUs from "../WhyUs/WhyUs";
import Solution from "../Solution/Solution";
import Testimonial from "../Testimonial/Testimonial";
import testimonials from "../../JsData/TestimonialsData";
import TrustedPartaners from "../TrustedParteners/TrustedParteners";
import Bannar from "../Bannar/Bannar";

export default function Body() {
  return (
    <div className="bodyContainer flex flex-col px-16">
      <Header />
      <WhyUs />
      <Solution />
      <div className="flex justify-between flex-wrap gap-5">
        {testimonials.map((item) => {
          return (
            <Testimonial
              name={item.name}
              description={item.testimonial}
              location={item.location}
              source={item.source}
            />
          );
        })}
      </div>
      <TrustedPartaners />
      <Bannar />
    </div>
  );
}
