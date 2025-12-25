import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import before1 from "../assets/images/before1.png";
import after1 from "../assets/images/after1.jpg";
import before2 from "../assets/images/before2.jpg";
import after2 from "../assets/images/after2.jpg";
import before3 from "../assets/images/before3.jpg";
import after3 from "../assets/images/after3.jpg";

const slides = [
  {
    before: before1,
    after: after1,
    title: "Living Room Transformation",
  },
  {
    before: before2,
    after: after2,
    title: "Bedroom Makeover",
  },
  {
    before: before3,
    after: after3,
    title: "Modern Kitchen Upgrade",
  },
];

const BeforeAfter = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="bg-page py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title text-dark font-transcity"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            BEFORE & AFTER
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted font-playfair"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
            }}
          >
            See how spaces are transformed with thoughtful design
          </motion.p>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Labels */}
          <motion.div 
            className="absolute top-4 left-4 bg-primary text-white px-4 py-1 text-sm font-semibold tracking-wide rounded shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            BEFORE
          </motion.div>
          <motion.div 
            className="absolute top-4 right-4 bg-accent text-white px-4 py-1 text-sm font-semibold tracking-wide rounded shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            AFTER
          </motion.div>

          {/* Images */}
          <div className="grid md:grid-cols-2">
            <motion.div 
              className="overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={slides[index].before}
                alt="Before"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            
            <motion.div 
              className="overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={slides[index].after}
                alt="After"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>

          {/* Caption */}
          <motion.div 
            className="text-center py-6 bg-section"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.h4 
              className="font-medium text-dark font-playfair text-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
            >
              {slides[index].title}
            </motion.h4>
          </motion.div>

          {/* Controls */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/90 hover:bg-accent text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl animate-float hidden xl:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse-slow hidden lg:block pointer-events-none"></div>
    </section>
  );
};

export default BeforeAfter;
