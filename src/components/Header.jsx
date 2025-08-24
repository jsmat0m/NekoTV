import { useRef, useState, useEffect, useCallback } from "react";
import { FaArrowCircleRight, FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/useApi";
import Logo from "./Logo";
import useSidebarStore from "../store/sidebarStore";
import Loader from "./Loader";

const Header = () => {
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSearchBar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchBar]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        resetSearch();
      }
    };

    if (showSearchBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchBar]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showSearchBar) {
        resetSearch();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showSearchBar]);

  const changeInput = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(newValue);
    }, 300);
  };

  const { data, isLoading, isError } = useApi(
    debouncedValue.length > 2 ? `/suggestion?keyword=${debouncedValue}` : null
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value.trim()) {
        navigate(`/search?keyword=${value.trim()}`);
        resetSearch();
      }
    },
    [value, navigate]
  );

  const navigateToAnimePage = useCallback(
    (id) => {
      navigate(`/anime/${id}`);
      resetSearch();
    },
    [navigate]
  );

  const resetSearch = useCallback(() => {
    setValue("");
    setDebouncedValue("");
    setShowSearchBar(false);
    clearTimeout(timeoutRef.current);
  }, []);

  const clearInput = useCallback(() => {
    setValue("");
    setDebouncedValue("");
    clearTimeout(timeoutRef.current);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative z-[100]" ref={searchContainerRef}>
      <div className="fixed w-full py-2 shadow-md bg-gradient-to-r from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-md">
        <div className="flex gap-2 px-5 md:px-10 md:gap-5 justify-between items-center">
          <div className="left flex gap-2 md:gap-5 items-center">
            <button
              onClick={sidebarHandler}
              aria-label="Toggle sidebar"
              className="p-1 hover:text-primary transition-colors"
            >
              <FaBars size={25} />
            </button>
            <Logo />
          </div>

          <div className="right flex gap-3 md:gap-5 items-center">
            <button
              aria-label={showSearchBar ? "Close search" : "Open search"}
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="p-1.5 hover:text-primary transition-colors"
            >
              {showSearchBar ? <FaTimes size={22} /> : <FaSearch size={20} />}
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`mt-2 px-4 transition-all duration-300 ${
            showSearchBar ? "flex" : "hidden"
          }`}
        >
          <div className="relative flex items-center w-full">
            <input
              ref={inputRef}
              value={value}
              onChange={changeInput}
              placeholder="Search anime..."
              type="text"
              aria-label="Search anime"
              className="w-full bg-gray-800 text-white py-2.5 pl-4 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute right-3 flex gap-2">
              {value.length > 0 && (
                <button
                  type="button"
                  onClick={clearInput}
                  aria-label="Clear search"
                  className="text-gray-400 hover:text-white p-1"
                >
                  <FaTimes size={18} />
                </button>
              )}
              <button
                type="submit"
                aria-label="Submit search"
                className="text-primary hover:text-primary-light p-1"
              >
                <FaSearch size={18} />
              </button>
            </div>
          </div>
        </form>
        <div
          className={`bg-gray-800 mt-1 mx-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
            showSearchBar && value.length > 2 ? "block" : "hidden"
          }`}
        >
          {isLoading ? (
            <div className="py-6 flex justify-center">
              <Loader size="small" />
            </div>
          ) : isError ? (
            <div className="py-4 text-center text-red-300">
              Failed to load suggestions
            </div>
          ) : data && data.data.length > 0 ? (
            <>
              <div className="max-h-[60vh] overflow-y-auto">
                {data.data.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigateToAnimePage(item.id)}
                    className="flex p-3 hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-16 h-20 relative">
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <h4 className="font-medium text-white truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 truncate">
                        {item.alternativeTitle}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-400">
                        <span>{item.aired}</span>
                        <span className="mx-2">•</span>
                        <span>{item.type}</span>
                        <span className="mx-2">•</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-primary hover:bg-primary-dark text-black font-bold flex items-center justify-center gap-2"
              >
                View All Results
                <FaArrowCircleRight />
              </button>
            </>
          ) : (
            debouncedValue.length > 2 && (
              <div className="py-6 text-center text-gray-400">
                No results found for "{debouncedValue}"
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
