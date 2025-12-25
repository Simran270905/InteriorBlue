import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCouch, FaPalette, FaLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaCouch size={30} />,
    title: "Residential Design",
    description: "Transform your home with tailored interiors that reflect your style and comfort.",
  },
  {
    icon: <FaPalette size={30} />,
    title: "Commercial Design",
    description: "Create modern, functional spaces for offices, cafes, and commercial establishments.",
  },
  {
    icon: <FaLightbulb size={30} />,
    title: "Concept & Mood Boards",
    description: "We develop detailed concepts and mood boards to visualize your dream space.",
  },
];

const Services = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="bg-page py-5 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="section-title text-dark mb-8 font-transcity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className="text-muted mb-12 max-w-2xl mx-auto font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer a complete range of interior design services, from concept to execution.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white-soft rounded-2xl shadow-lg p-8 hover:shadow-2xl group relative overflow-hidden flex flex-col items-center cursor-pointer"
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon with pulse animation */}
              <motion.div 
                className="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent/25 transition-all duration-500 relative overflow-hidden"
                animate={{ 
                  scale: [1, 1.1, 1],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                whileHover={{ scale: 1.15 }}
              >
                {service.icon}
                {/* Icon glow ring */}
                <div className="absolute inset-0 bg-gradient-radial from-accent/30 to-transparent rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold mb-2 text-dark font-crondereg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-muted text-center font-playfair leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.description}
              </motion.p>

              {/* Card bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 -right-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float hidden 2xl:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse-slow hidden xl:block pointer-events-none"></div>
    </section>
  );
};

export default Services;
