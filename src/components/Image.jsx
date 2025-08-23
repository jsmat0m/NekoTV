/* eslint-disable react/prop-types */
import SoundsInfo from "../components/SoundsInfo";
import { Link } from "react-router-dom";
import catIcon from "../assets/cat.svg"; 

const Image = ({ data }) => {
  return (
    <div>
      <Link to={`/anime/${data.id}`}>
        <div className="film-poster group transition-all rounded-md w-full h-full pb-[140%] mb-2 relative overflow-hidden bg-[#545454] block">
          {/* Custom Blur Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            style={{
              background: `linear-gradient(to bottom, rgba(31,79,112,0.6), rgba(76,52,140,0.5), rgba(0,0,0,0.7))`,
              backdropFilter: "blur(4px)", // custom blur strength
            }}
          ></div>

          {/* Custom Cat Icon (appears on hover) */}
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <img
              src={catIcon}
              alt="view icon"
              className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg"
            />
          </div>

          {/* Bottom Info */}
          <div className="z-30 absolute bottom-0 left-0 p-1">
            <SoundsInfo episodes={data.episodes} />
          </div>

          {/* Poster Image with zoom effect */}
          <img
            className="absolute h-full w-full inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            src={data.poster}
            alt={data.title}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Title */}
      <Link to={`/anime/${data.id}`}>
        <div
          title={data.title}
          className="title line-clamp-1 text-sm md:text-base hover:text-primary"
        >
          <h1>{data.title}</h1>
        </div>
      </Link>

      {/* Type & Duration */}
      {data.type && (
        <div className="type flex gray gap-3 items-center text-sm">
          <h4>{data.type}</h4>
          <div className="h-1 w-1 bg-primary rounded-full"></div>
          <h4>{data.duration}</h4>
        </div>
      )}
    </div>
  );
};

export default Image;
