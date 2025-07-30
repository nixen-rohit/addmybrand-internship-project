import React from "react";
import Home from "@/components/Home";
import TextFlow from "@/components/TextFlow";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonial from "@/components/TestimonialSlider";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className=" h-screen  w-full gap-4  ">     
      
      <section id="home">
        <Home />
      </section>
      <TextFlow />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials">
         <Testimonial/>
      </section> 
      <FAQ />
      <section id="about">
        <Footer />
      </section>
    </div>
  );
};

export default page;
