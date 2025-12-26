const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-playfair">
      
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/20">
        
        {/* CENTERED CONTENT */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-oliver tracking-widest text-[#EDEAE4]
                       hover:text-[#C9A96A] transition"
          >
            INTERIOR
          </button>

          {/* Navigation */}
          <ul className="hidden md:flex items-center space-x-12 text-sm tracking-wide text-[#EDEAE4]/85">
            {[
              { label: " Services", id: "services" },
              { label: "About Us", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Furniture", id: "furniture" },
              { label: "Reviews", id: "reviews" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative cursor-pointer transition hover:text-[#C9A96A] group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px]
                                 bg-[#C9A96A] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="hidden md:block text-sm tracking-wide text-[#EDEAE4]/70">
            +91&nbsp;01234&nbsp;56789
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
