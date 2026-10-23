const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-end px-8 py-6">
      <div className="font-cormorant flex gap-4 text-end text-white">
        <a href="#home" className="navbar-link">
          Home
        </a>

        <a href="#style" className="navbar-link">
          Style
        </a>

        <a href="#inspiration" className="navbar-link">
          Inspiration
        </a>

        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
