import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaLightbulb, FaDraftingCompass, FaCouch, FaCheck } from "react-icons/fa";

const steps = [
  { icon: <FaLightbulb size={24} />, title: "Consultation", description: "We discuss your vision, requirements, and budget." },
  { icon: <FaDraftingCompass size={24} />, title: "Concept Design", description: "Sketch layouts, select colors, materials, and style." },
  { icon: <FaCouch size={24} />, title: "Execution", description: "Bring the design to life with careful planning and quality implementation." },
  { icon: <FaCheck size={24} />, title: "Delivery", description: "Finalize the project with attention to detail and client satisfaction." }
];

const Process = () => {
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

  const stepVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-section overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="section-title text-dark mb-8 font-transcity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>
        
        <motion.p 
          className="text-muted mb-12 max-w-2xl mx-auto font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A clear, step-by-step process ensures a smooth and enjoyable interior design journey.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="bg-white-soft rounded-2xl shadow-lg p-8 flex flex-col items-center text-center group relative overflow-hidden cursor-pointer hover:shadow-2xl"
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Step number with draw animation */}
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
              >
                {index + 1}
              </motion.div>

              {/* Icon container */}
              <motion.div 
                className="bg-accent/10 group-hover:bg-accent text-accent group-hover:text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                {step.icon}
                {/* Icon ring pulse */}
                <motion.div 
                  className="absolute inset-0 bg-accent/20 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.2, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              <motion.h3 
                className="font-semibold text-lg mb-3 font-playfair text-dark"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p 
                className="text-muted text-sm font-playfair leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {step.description}
              </motion.p>

              {/* Progress connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute top-full left-1/2 w-1 h-8 bg-accent/20 group-hover:bg-accent/50 transform -translate-x-1/2"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              )}

              {/* Card bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-12 w-28 h-28 bg-accent/5 rounded-full blur-3xl animate-float hidden 2xl:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-12 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-slow hidden xl:block pointer-events-none"></div>
    </section>
  );
};

export default Process;
