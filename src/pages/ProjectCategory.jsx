import { useParams, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "../data/projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const cardHover = {
  hover: { y: -12, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
};

const ProjectCategory = () => {
  const { category } = useParams();
  const data = projectsData[category];
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex gap-4 mb-4">
          <button onClick={() => navigate("/")} className="btn-outline">← Back to Home</button>
          <button onClick={() => navigate("/projects")} className="btn-outline">← Back to Projects</button>
        </div>
        <p>Category not found</p>
      </div>
    );
  }

  return (
    <section className="bg-section py-24 relative font-playfair">
      {/* Back buttons */}
      <motion.div className="absolute top-6 left-6 flex gap-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <button onClick={() => navigate("/")} className="btn-outline">← Back to Home</button>
        <button onClick={() => navigate("/projects")} className="btn-outline">← Back to Projects</button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.h2
          className="section-title text-dark text-center font-transcity text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        >
          {data.title}
        </motion.h2>

        <motion.p
          className="text-muted text-center mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } } }}
        >
          {data.description}
        </motion.p>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              {...cardHover}
              onClick={() => navigate(`/projects/${category}/${project.id}`)}
            >
              {/* Layer 1: base shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-200 rounded-xl shadow-xl transform scale-95 transition-transform duration-300 group-hover:scale-100"></div>

              {/* Layer 2: main card */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image */}
                <motion.div className="relative h-64 overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                  {/* Layer 3: overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                  >
                    <h4 className="text-white font-semibold text-lg">{project.name}</h4>
                  </motion.div>
                </motion.div>

                {/* Layer 4: content */}
                <div className="p-4 relative z-10">
                  <h4 className="text-dark font-medium">{project.name}</h4>
                  <p className="text-muted mt-1 text-sm line-clamp-3">{project.description}</p>
                </div>
              </div>

              {/* Layer 5: floating accent */}
              <motion.div
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary/30 blur-md opacity-60"
                animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle floating orb */}
        <motion.div
          className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl hidden xl:block pointer-events-none"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default ProjectCategory;
