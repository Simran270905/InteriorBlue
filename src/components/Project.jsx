import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import p1 from "../assets/images/project1.jpg";
import p2 from "../assets/images/project2.jpg";
import p3 from "../assets/images/project3.jpg";
import p4 from "../assets/images/hero.png";
import p5 from "../assets/images/int1.jpg";
import p6 from "../assets/images/residentialvilla.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [p1, p2, p3, p4, p5, p6];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-5 bg-white-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="section-title font-transcity text-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          OUR PROJECTS
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-muted max-w-xl mx-auto font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We take responsibility for created projects at every stage.
        </motion.p>

        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((img, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <span className="text-white font-playfair font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Project {i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          className="btn-primary mt-12 font-playfair px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/25 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create a Project
          <span className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
        </motion.button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float hidden xl:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse-slow hidden lg:block pointer-events-none"></div>
    </section>
  );
};

export default Projects;
