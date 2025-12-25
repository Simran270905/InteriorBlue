import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "../data/projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 25
    }
  }
};

const cardHover = {
  hover: { 
    y: -10,
    scale: 1.03,
    transition: { 
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-section py-24 relative font-playfair">
      {/* Back to Home button */}
      <motion.button
        onClick={() => navigate("/")}
        className="btn-outline absolute top-6 left-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.h2 
          className="section-title text-dark text-center font-transcity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8 }
            }
          }}
        >
          OUR PROJECTS
        </motion.h2>

        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(projectsData).map(([key, value], index) => {
            const cardImage = value.titleImage || value.projects[0].image;

            return (
              <motion.div
                key={key}
                className="group bg-white rounded-md shadow-md overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                {...cardHover}
              >
                <Link to={`/projects/${key}`} className="block h-full">
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={cardImage}
                      alt={value.title}
                      className="h-64 w-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-all duration-500"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div>
                        <h4 className="text-white font-medium text-xl drop-shadow-lg">{value.title}</h4>
                        <p className="text-white/90 text-sm mt-1 drop-shadow-md">
                          Explore Projects →
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="p-6">
                    <motion.h4 
                      className="font-medium text-dark group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {value.title}
                    </motion.h4>
                    <motion.p 
                      className="text-muted mt-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ambient floating orb */}
        <motion.div 
          className="absolute top-1/3 right-12 w-28 h-28 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-xl hidden xl:block pointer-events-none"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
