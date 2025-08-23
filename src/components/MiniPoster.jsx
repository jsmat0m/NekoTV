/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SoundsInfo from "./SoundsInfo";
import catIcon from "../assets/cat.svg"; 

const MiniPoster = ({ item }) => {
  return (
    <div key={item.id} className="flex border-lightBg pb-3 items-center gap-4">
      <Link className="" to={`/anime/${item.id}`}>
        <div className="poster group bg-white rounded-md flex-shrink-0 relative overflow-hidden w-16 pb-[85px]">
          {/* Blur Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            style={{
              background: `linear-gradient(to bottom, rgba(31,79,112,0.6), rgba(76,52,140,0.5), rgba(0,0,0,0.7))`,
              backdropFilter: "blur(4px)",
            }}
          ></div>

          {/* Cat Icon on hover */}
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <img
              src={catIcon}
              alt="view icon"
              className="w-6 h-6 md:w-7 md:h-7 drop-shadow-lg"
            />
          </div>

          {/* Poster Image (zoom effect) */}
          <img
            className="h-full absolute w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            src={item.poster}
            alt={item.title}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Text Info */}
      <div className="text">
        <Link to={`/anime/${item.id}`}>
          <h2 className="title hover:text-primary mb-2 font-bold">
            {item.title}
          </h2>
        </Link>
        <div className="item flex items-center text-[12px] text-[#ccc]">
          <SoundsInfo episodes={item.episodes} />
          {item.type && (
            <>
              <span className="block mx-1 h-1 w-1 bg-primary rounded-full"></span>
              <h2>{item.type}</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniPoster;
