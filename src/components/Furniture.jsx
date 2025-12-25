import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import f1 from "../assets/images/f1.jpg";
import f2 from "../assets/images/f2.jpg";
import wood from "../assets/images/wood.jpg";
import f4 from "../assets/images/f4.jpg";

const Furniture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const images = [
    { src: f1, alt: "Furniture 1" },
    { src: f2, alt: "Furniture 2" },
    { src: wood, alt: "Furniture 3" },
    { src: f4, alt: "Furniture 4" }
  ];

  return (
    <section ref={ref} className="bg-section py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="section-title text-dark font-transcity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FURNITURE
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-muted max-w-lg mx-auto font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We use only high quality and stylish materials.
        </motion.p>

        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {images.map((image, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -12 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-800 ease-out"
                whileHover={{ scale: 1.1 }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 opacity-0 group-hover:opacity-100 transition-all duration-600 flex items-end p-6">
                <span className="text-white font-playfair font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-400">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          className="btn-outline mt-12 font-playfair px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/25 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More
          <span className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
        </motion.button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 right-12 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float hidden 2xl:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-12 w-20 h-20 bg-primary/10 rounded-full blur-lg animate-pulse-slow hidden xl:block pointer-events-none"></div>
    </section>
  );
};

export default Furniture;
