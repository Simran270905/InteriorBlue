import React from "react";
import { motion } from "framer-motion";

// Sample logos (replace with your own images)
import logo1 from "../assets/images/logo1.jpg";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.jpg";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Companies = () => {
  return (
    <section className="py-16 bg-gray-50 font-playfair">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-transcity text-gray-800 mb-6">We’ve Worked With</h2>
        <p className="text-gray-600 mb-12">
          Trusted by top companies to deliver exceptional interior design solutions.
        </p>

        <div className="overflow-x-hidden">
          <motion.div
            className="flex gap-2"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img src={logo} alt={`Company ${index + 1}`} className="object-contain h-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
