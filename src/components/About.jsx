import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import office from "../assets/images/studio.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="bg-page py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="section-title font-transcity text-dark"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            ABOUT US
          </motion.h2>
          
          <motion.h4 
            className="font-bold font-playfair text-[#C9A96A] uppercase tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            BRIEFLY ABOUT OUR STUDIO
          </motion.h4>

          <motion.p 
            className="text-muted font-playfair leading-relaxed text-justify md:text-left"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Our team of architects creates interior design projects for private homes 
            and public spaces. We handle projects of any complexity, from initial 
            concept to final execution.
          </motion.p>

          <motion.p 
            className="text-muted font-playfair leading-relaxed text-justify md:text-left"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Our goal is to create the most comfortable and visually perfect spaces 
            that reflect both style and functionality.
          </motion.p>

          <motion.button 
            className="btn-outline font-playfair mt-8 px-8 py-3 rounded-xl hover:bg-[#C9A96A] hover:text-white transition-all group relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More
            <span className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="overflow-hidden rounded-2xl shadow-xl group/image relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src={office}
            alt="About Studio"
            className="w-full h-96 md:h-auto object-cover image-card group-hover/image:scale-110 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 opacity-0 group-hover/image:opacity-100 transition-all duration-700"></div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl animate-float hidden lg:block pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse-slow hidden md:block pointer-events-none"></div>
    </section>
  );
};

export default About;
