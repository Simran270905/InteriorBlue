import Navbar from "./Navbar";
import hero from "../assets/images/hero.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-24 flex items-center overflow-hidden w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B1220]/75" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-10">
        <div className="pt-28 grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div className="space-y-7">
            <h1
              className={`text-5xl md:text-6xl font-crondereg leading-tight text-[#F5F3EF]
              transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              INTERIOR <br />
              <span className="text-[#C9A96A] font-semibold tracking-wide">
                DESIGN
              </span>
            </h1>

            <p
              className={`max-w-full md:max-w-lg font-playfair text-[#D6D3CE] text-[15px] leading-relaxed
              transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              The best solutions for your home. We create functional,
              aesthetic and modern interior spaces.
            </p>

            {/* CTA */}
            <button
              onClick={() => navigate("/projects")}
              className="mt-4 inline-flex items-center bg-[#C9A96A] text-[#1F1F1F]
              px-8 py-3 font-playfair tracking-wide
              transition-all duration-500
              hover:bg-[#B89654] hover:scale-105 hover:shadow-xl hover:shadow-black/30"
            >
              Our Projects
            </button>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[-6rem] right-0 w-44 h-44 bg-[#C9A96A]/10 rounded-full blur-2xl animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-0 w-28 h-28 bg-white/5 rounded-full blur-xl animate-pulse-slow hidden md:block" />
    </section>
  );
};

export default Hero;
