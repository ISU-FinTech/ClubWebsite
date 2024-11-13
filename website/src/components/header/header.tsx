import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/LogoClub.png";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-isu_white shadow-md text-gray-800"
      }`}
    >
      <div className="flex items-center">
        <img src={Logo} alt="Club Logo" className="h-20 w-auto" />
      </div>

      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className={`text-lg text-blue-600 focus:outline-none border-2 border-blue-600 rounded-full p-2 ${
            isOpen ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } mt-4 bg-isu_white absolute top-16 left-0 right-0 shadow-md rounded-lg z-20`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg`}
        >
          Home
        </Link>
        <Link
          to="/leadership"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg`}
        >
          Leadership
        </Link>
        <Link
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg`}
        >
          Projects
        </Link>
        <Link
          to="/resources"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg`}
        >
          Resources
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScE61VUU0z7hUbpcqtnE-STHmjOh5YjbUnlPMAEZZwY5Za8rg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-3 mx-2 rounded-lg text-lg`}
        >
          Apply
        </a>
      </nav>

      <nav className="hidden md:block">
        <Link
          to="/"
          className={`px-4 py-3 mx-2 rounded-lg text-lg border-2 hover:opacity-60`}
        >
          Home
        </Link>
        <Link
          to="/leadership"
          className={`px-4 py-3 mx-2 rounded-lg text-lg border-2 hover:opacity-60`}
        >
          Leadership
        </Link>
        <Link
          to="/projects"
          className={`px-4 py-3 mx-2 rounded-lg text-lg border-2 hover:opacity-60`}
        >
          Projects
        </Link>
        <Link
          to="/resources"
          className={`px-4 py-3 mx-2 rounded-lg text-lg border-2 hover:opacity-60`}
        >
          Resources
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScE61VUU0z7hUbpcqtnE-STHmjOh5YjbUnlPMAEZZwY5Za8rg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-3 mx-2 rounded-lg text-lg border-2 hover:opacity-60`}
        >
          Apply
        </a>
      </nav>
    </header>
  );
};

export default Header;
