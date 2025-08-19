import { FaArrowCircleRight, FaSearch } from "react-icons/fa";
import banner from "../assets/homeBanner.png";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Root = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const changeInput = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${value}`);
  };

  return (
    <div className="relative h-[100dvh] w-full bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center h-[calc(100dvh-60px)] px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-2xl">
          {/* Logo */}
          <Logo className="w-40 md:w-56" />

          {/* Search Box */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col md:flex-row gap-4"
          >
            <input
              value={value}
              onChange={changeInput}
              type="text"
              placeholder="Search Anime..."
              className="flex-1 py-3 px-5 rounded-lg text-white text-lg md:text-xl focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-black px-5 py-3 rounded-lg text-lg md:text-xl font-bold hover:scale-105 transition-transform"
            >
              <FaSearch />
            </button>
          </form>

          {/* Banner */}
          <div className="banner mt-6">
            <img
              src={banner}
              alt="banner"
              className="w-64 md:w-96 lg:w-[400px] animate-fadeIn"
            />
          </div>

          {/* Explore Button */}
          <Link
            to="/home"
            className="mt-6 bg-primary text-black font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span>Explore Animes</span>
            <FaArrowCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Root;
