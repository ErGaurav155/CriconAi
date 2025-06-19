import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import React from "react";

const FaqSection = () => {
  return (
    <div className="min-h-screen  text-white mt-40 max-w-7xl mx-auto w-full">
      <Faq />
      <Footer />
    </div>
  );
};

export default FaqSection;
