import useSidebarStore from "../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";

import { useEffect } from "react";
import { FaAngleLeft, FaHome, FaStar, FaFilm, FaClock, FaList, FaFire, FaArrowUp, FaHeart } from "react-icons/fa";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);
import useSidebarStore from "../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";

import { useEffect } from "react";
import { FaAngleLeft, FaHome, FaStar, FaFilm, FaClock, FaList, FaFire, FaArrowUp, FaHeart } from "react-icons/fa";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);

  const location = useLocation();
  const key = location.key;

  useEffect(() => {
    if (isSidebarOpen) sidebarHandler();
  }, [key]);

  const list = [
    { name: "Home", link: "/home", icon: <FaHome /> },
    { name: "Subbed Anime", link: "/animes/subbed-anime", icon: <FaStar /> },
    { name: "Dubbed Anime", link: "/animes/dubbed-anime", icon: <FaStar /> },
    { name: "Most Popular", link: "/animes/most-popular", icon: <FaFire /> },
    { name: "Top Airing", link: "/animes/top-airing", icon: <FaArrowUp /> },
    { name: "Most Favorite", link: "/animes/most-favorite", icon: <FaHeart /> },
    { name: "Latest Completed", link: "/animes/completed", icon: <FaClock /> },
    { name: "Recently Added", link: "/animes/recently-added", icon: <FaClock /> },
    { name: "Recently Updated", link: "/animes/recently-updated", icon: <FaClock /> },
    { name: "Top Upcoming", link: "/animes/top-upcoming", icon: <FaArrowUp /> },
    { name: "A-Z List", link: "/animes/az-list/a", icon: <FaList /> },
    { name: "Movies", link: "/animes/movie", icon: <FaFilm /> },
    { name: "OVAs", link: "/animes/ova", icon: <FaFilm /> },
    { name: "ONAs", link: "/animes/ona", icon: <FaFilm /> },
    { name: "Specials", link: "/animes/special", icon: <FaStar /> },
  ];

  return (
    <div
      className={`sidebar transition-all fixed overflow-scroll h-full z-[100] inset-0 w-64 md:w-80`}
      style={{ backgroundColor: "rgba(59, 62, 129, 0.95)" }} // Transparent #3b3e81
    >
      <button
        className="w-full pt-4 pl-2 flex items-center gap-2 hover:text-[#7dd3fc] text-base md:text-xl"
        onClick={sidebarHandler}
      >
        <FaAngleLeft />
        <span>Close Menu</span>
      </button>
      <ul className="py-4">
        {list.map((item) => (
          <li
            key={item.link}
            onClick={sidebarHandler}
            className="py-4 pl-4 hover:text-[#a78bfa] text-base md:text-lg border-b border-[rgba(255,255,255,.05)] w-full flex items-center gap-2"
          >
            {item.icon}
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        <li className="py-4 pl-2 text-base md:text-lg w-full">Genres</li>
        <Genres
          event={sidebarHandler}
          className="w-1/2 my-2 pl-2 hover:opacity-[.7]"
        />
      </ul>
    </div>
  );
};

export default Sidebar;

  const location = useLocation();
  const key = location.key;

  useEffect(() => {
    if (isSidebarOpen) sidebarHandler();
  }, [key]);

  const list = [
    { name: "Home", link: "/home", icon: <FaHome /> },
    { name: "Subbed Anime", link: "/animes/subbed-anime", icon: <FaStar /> },
    { name: "Dubbed Anime", link: "/animes/dubbed-anime", icon: <FaStar /> },
    { name: "Most Popular", link: "/animes/most-popular", icon: <FaFire /> },
    { name: "Top Airing", link: "/animes/top-airing", icon: <FaArrowUp /> },
    { name: "Most Favorite", link: "/animes/most-favorite", icon: <FaHeart /> },
    { name: "Latest Completed", link: "/animes/completed", icon: <FaClock /> },
    { name: "Recently Added", link: "/animes/recently-added", icon: <FaClock /> },
    { name: "Recently Updated", link: "/animes/recently-updated", icon: <FaClock /> },
    { name: "Top Upcoming", link: "/animes/top-upcoming", icon: <FaArrowUp /> },
    { name: "A-Z List", link: "/animes/az-list/a", icon: <FaList /> },
    { name: "Movies", link: "/animes/movie", icon: <FaFilm /> },
    { name: "OVAs", link: "/animes/ova", icon: <FaFilm /> },
    { name: "ONAs", link: "/animes/ona", icon: <FaFilm /> },
    { name: "Specials", link: "/animes/special", icon: <FaStar /> },
  ];

  return (
    <div
      className={`sidebar transition-all fixed overflow-scroll h-full z-[100] inset-0 w-64 md:w-80 bg-[rgba(31,79,112,0.95)] ${
        isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <button
        className="w-full pt-4 pl-2 flex items-center gap-2 hover:text-[#7dd3fc] text-base md:text-xl"
        onClick={sidebarHandler}
      >
        <FaAngleLeft />
        <span>Close Menu</span>
      </button>
      <ul className="py-4">
        {list.map((item) => (
          <li
            key={item.link}
            onClick={sidebarHandler}
            className="py-4 pl-4 hover:text-[#a78bfa] text-base md:text-lg border-b border-[rgba(255,255,255,.05)] w-full flex items-center gap-2"
          >
            {item.icon}
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        <li className="py-4 pl-2 text-base md:text-lg w-full">Genres</li>
        <Genres
          event={sidebarHandler}
          className="w-1/2 my-2 pl-2 hover:opacity-[.7]"
        />
      </ul>
    </div>
  );
};

export default Sidebar;
