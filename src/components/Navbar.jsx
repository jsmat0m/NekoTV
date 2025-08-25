import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "/home" },
    { name: "Movies", id: "/animes/movie" },
    { name: "TV Shows", id: "/animes/tv" },
    { name: "Most Popular", id: "/animes/most-popular" },
    { name: "Top Airing", id: "/animes/top-airing" },
  ];

  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                location.pathname === item.id
                  ? "bg-primary/80 text-black"
                  : "bg-white/10 text-white hover:bg-primary/80 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden relative">
          <button
            onClick={() => setShow(!show)}
            className="text-white p-2 hover:text-primary transition-colors flex items-center gap-2"
          >
            <FaAlignJustify />
            Menu
          </button>

          <ul
            className={`${
              show ? "flex" : "hidden"
            } absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-11/12 flex-col items-center bg-transparent backdrop-blur-md rounded-lg py-4 gap-3 shadow-lg transition-all`}
          >
            {navLinks.map((item) => (
              <li key={item.id} className="w-full text-center">
                <Link
                  onClick={() => setShow(false)}
                  to={item.id}
                  className={`block w-full px-4 py-2 rounded-lg font-semibold transition-all ${
                    location.pathname === item.id
                      ? "bg-primary/80 text-black"
                      : "bg-white/10 text-white hover:bg-primary/80 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
