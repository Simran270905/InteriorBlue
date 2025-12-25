import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 font-playfair">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-lg font-semibold font-oliver tracking-wide">
          INTERIOR
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-sm tracking-wide">
          <li className="hover:text-accent transition cursor-pointer">About Us</li>
          <li className="hover:text-accent transition cursor-pointer">Our Projects</li>
          <li className="hover:text-accent transition cursor-pointer">Furniture</li>
          <li className="hover:text-accent transition cursor-pointer">Reviews</li>
          <li className="hover:text-accent transition cursor-pointer">Contacts</li>
        </ul>
        <Link to="/projects" className="hover:text-accent transition">
  Our Projects
</Link>
        {/* Contact */}
        <div className="hidden md:block text-sm text-gray-300">
          +91 98765 43210
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
