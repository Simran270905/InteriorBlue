import React, { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section ref={ref} className="bg-section py-10 font-playfair">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-title text-dark text-center font-transcity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Interior Design Enquiry
        </motion.h2>
        
        <motion.p 
          className="text-muted text-center mt-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Share your requirements and we will get back to you with a tailored solution.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white-soft p-10 rounded-2xl shadow-lg grid gap-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input-field border border-gray-300 rounded-lg p-4 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileFocus={{ scale: 1.02 }}
              required
            />
            
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="input-field border border-gray-300 rounded-lg p-4 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileFocus={{ scale: 1.02 }}
              required
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input-field border border-gray-300 rounded-lg p-4 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileFocus={{ scale: 1.02 }}
            />
            
            <motion.select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="input-field border border-gray-300 rounded-lg p-4 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-500 hover:scale-[1.02] appearance-none"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileFocus={{ scale: 1.02 }}
              required
            >
              <option value="">Select Service</option>
              <option value="residential">Residential Design</option>
              <option value="commercial">Commercial Design</option>
              <option value="consultation">Consultation</option>
            </motion.select>
          </motion.div>

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message / requirements"
            rows="5"
            className="input-field border border-gray-300 rounded-lg p-4 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-500 hover:scale-[1.01]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileFocus={{ scale: 1.01 }}
          />

          <motion.button
            type="submit"
            className="btn-primary w-full py-4 mt-2 rounded-xl hover:shadow-lg transition-all duration-500 relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Submit Enquiry</span>
            <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-500"></div>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;
