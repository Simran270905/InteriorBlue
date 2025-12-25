import { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";



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

const Reviews = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  const gradientColors = [
    'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',  // Deep blue
    'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #93c5fd 100%)',  // Navy blue
    'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #bfdbfe 100%)',  // Royal blue
  ];

  // ... rest of your component remains exactly the same

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/review-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-accent/40 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left – Heading */}
        <motion.div
          className="text-white space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight font-oliver"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CLIENT <br />
            <span className="text-accent font-bold block animate-pulse-slow">EXPERIENCES</span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 max-w-md font-playfair leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every space tells a story. Here's what our clients say about the transformation journey.
          </motion.p>

          {/* Dots */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === active ? "bg-accent scale-125 shadow-lg shadow-accent/50" : "bg-white/40 hover:bg-white/60"
                }`}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right – Slider */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="flex"
            animate={{ 
              x: `-${active * 100}%`,
            }}
            transition={{ 
              x: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }
            }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-full relative overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                style={{
                  background: gradientColors[index]
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {/* Quote mark */}
                <motion.div 
                  className="text-4xl text-white/30 absolute -top-4 -left-4 opacity-30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  „
                </motion.div>

                <motion.p 
                  className="text-lg leading-relaxed text-white/95 font-playfair mb-8 relative z-10 px-10 md:px-12 py-10 md:py-12"
                  animate={{ 
                    y: [0, -2, 2, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  "{item.text}"
                </motion.p>

                <motion.div 
                  className="flex items-center relative z-10 px-10 md:px-12 pb-10 md:pb-12"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.img
                    src={item.image}
                    className="w-16 h-16 rounded-full object-cover border-3 border-white/50 shadow-2xl ring-4 ring-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div className="ml-6">
                    <motion.h4 
                      className="font-bold font-playfair text-xl text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-white/80 font-playfair font-medium"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.role}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <motion.button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 hover:bg-accent/90 backdrop-blur-md text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30"
            whileHover={{ 
              scale: 1.2, 
              rotate: -180,
              boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>

          <motion.button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 hover:bg-accent/90 backdrop-blur-md text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30"
            whileHover={{ 
              scale: 1.2, 
              rotate: 180,
              boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
