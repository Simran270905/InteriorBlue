import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";

/* ------------------ DATA ------------------ */
const testimonials = [
  {
    name: "Vivek Verma",
    role: "Living Room Renovation",
    text: "The transformation was beyond expectations. The space feels warm, elegant and thoughtfully designed.",
    image: p1,
  },
  {
    name: "Rohan Mehta",
    role: "Luxury Villa Interior",
    text: "An exceptional balance of luxury and comfort. Every detail reflects refined taste and planning.",
    image: p2,
  },
  {
    name: "Ananya Kulkarni",
    role: "Modern Apartment",
    text: "The interiors feel calm, functional and premium. A seamless experience from start to finish.",
    image: p3,
  },
];

/* Dark blue luxury gradients */
const gradientColors = [
  "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
  "linear-gradient(135deg, #020617 0%, #111827 50%, #1f2937 100%)",
  "linear-gradient(135deg, #020617 0%, #0b1324 50%, #1e293b 100%)",
];

const Reviews = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]"
    >
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]" />

      {/* Accent glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-oliver text-white leading-tight">
            CLIENT <br />
            <span className="text-blue-400 block">EXPERIENCES</span>
          </h2>

          <p className="text-slate-300 max-w-md font-playfair leading-relaxed">
            Every space tells a story. Here’s how our clients experienced their transformation.
          </p>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-blue-400 scale-125 shadow-lg shadow-blue-500/40"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          <motion.div
            className="flex"
            animate={{ x: `-${active * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full rounded-2xl p-10 md:p-12 shadow-2xl border border-white/10"
                style={{ background: gradientColors[index] }}
              >
                <p className="text-white/90 text-lg font-playfair leading-relaxed mb-8">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white/10"
                  />
                  <div>
                    <h4 className="font-playfair text-lg text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={() =>
              setActive((active - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500 text-white transition backdrop-blur"
          >
            ‹
          </button>

          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500 text-white transition backdrop-blur"
          >
            ›
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
