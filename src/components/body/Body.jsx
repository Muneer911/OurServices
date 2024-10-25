import React from "react";
import Header from "../header/Header";
import WhyUs from "../whyUs/WhyUs";
import Solution from "../solution/Solution";
import Testemonial from "../Testimonial";
import testimonials from "../../TestimonialsData";
import Tr from "../bannar/Tr";
import Bannar from "../bannar/Bannar";

export default function Body() {
  return (
    <div className="bodyContainer flex flex-col px-16 ">
      <Header />
      <WhyUs />
      <Solution />
      <div className="flex justify-between flex-wrap gap-5">
        {testimonials.map((item) => {
          return (
            <Testemonial
              name={item.name}
              description={item.testimonial}
              location={item.location}
              source={item.source}
            />
          );
        })}
      </div>
      <Tr />
      <Bannar />
    </div>
  );
}
