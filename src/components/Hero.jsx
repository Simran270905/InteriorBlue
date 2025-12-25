import Navbar from "./Navbar";
import hero from "../assets/images/hero.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // 👈 ADD THIS

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary opacity-80 transition-transform duration-1000 ease-out hover:scale-[1.02]" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Text */}
          <div className="space-y-6">
            <h1
              className={`text-5xl md:text-6xl font-crondereg leading-tight transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              INTERIOR <br />
              <span className="text-accent font-semibold inline-block animate-pulse-slow">
                DESIGN
              </span>
            </h1>

            <p
              className={`text-gray-300 max-w-md font-playfair transform transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              The best solutions for your home. We create functional,
              aesthetic and modern interior spaces.
            </p>

            {/* ✅ NAVIGATE TO PROJECTS */}
            <button
              onClick={() => navigate("/projects")}
              className="btn-primary font-playfair transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 delay-400 group relative overflow-hidden"
            >
              Our Projects
              <span className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
            </button>
          </div>

          {/* Empty column for balance */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float delay-1000 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse-slow delay-500 hidden md:block" />
    </section>
  );
};

export default Hero;
