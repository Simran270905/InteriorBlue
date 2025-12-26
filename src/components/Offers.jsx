import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Free Consultation",
    description: "Book a consultation and get expert advice for your interiors without any charges.",
    icon: "📝",
  },
  {
    title: "Seasonal Discount",
    description: "Get up to 20% off on selected interior packages this season.",
    icon: "💰",
  },
  {
    title: "Customized Design",
    description: "Tailored designs to fit your taste, style, and space perfectly.",
    icon: "🎨",
  },
];

const Offers = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  return (
    <section className="font-playfair bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-transcity">Our Special Offers</h2>
        <p className="text-gray-600 mb-12">
          Enhance your home with our exclusive offers designed for your comfort and style.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
