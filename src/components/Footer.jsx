const Footer = () => {
  return (
    <footer className="bg-footer text-gray-400 py-16 font-playfair">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h4 className="text-white mb-4">Interior Studio</h4>
          <p>Premium interior design solutions.</p>
        </div>

        <div>
          <h4 className="text-white mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Projects</li>
            <li>Furniture</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Contact</h4>
          <p>info@interior.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
