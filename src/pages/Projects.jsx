import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "../data/projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 25 } },
};

const Projects = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-section py-24 relative font-playfair">
      {/* Back to Home */}
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
          className="section-title text-dark text-center font-transcity text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
                className="relative group cursor-pointer"
                variants={itemVariants}
              >
                {/* Layer 1: base shadow layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-200 rounded-xl shadow-xl transform scale-95 transition-transform duration-300 group-hover:scale-100"></div>

                {/* Layer 2: main card */}
                <Link to={`/projects/${key}`} className="relative block rounded-xl overflow-hidden shadow-lg bg-white">
                  <motion.div
                    className="relative overflow-hidden h-64"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Image */}
                    <img src={cardImage} alt={value.title} className="w-full h-full object-cover" />

                    {/* Layer 3: overlay gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-all duration-500"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div>
                        <h4 className="text-white font-semibold text-lg drop-shadow-lg">
                          {value.title}
                        </h4>
                        <p className="text-white/90 text-sm mt-1 drop-shadow-md">
                          Explore Projects →
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Layer 4: card content */}
                  <div className="p-6 relative z-10">
                    <motion.h4
                      className="font-medium text-dark group-hover:text-primary transition-colors duration-300 text-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      {value.title}
                    </motion.h4>
                    <motion.p
                      className="text-muted mt-2 text-sm line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </Link>

                {/* Layer 5: floating accent shapes */}
                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary/30 blur-md opacity-60"
                  animate={{
                    y: [0, -6, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
