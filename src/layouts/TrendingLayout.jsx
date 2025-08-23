import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

import catIcon from "../assets/cat.svg"; 

const TrendingLayout = ({ data }) => {
  return (
    <div className="trending mt-5">
      <Heading className="mb-2">Trending</Heading>
      <Swiper
        modules={[Navigation]}
        navigation
        breakpoints={{
          0: { slidesPerView: 3 },
          800: { slidesPerView: 4 },
          1320: { slidesPerView: 6 },
        }}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item flex flex-col items-center overflow-hidden px-1 md:px-2">
                <Link
                  to={`/anime/${item.id}`}
                  className="poster group w-full h-0 pb-[150%] bg-lightbg relative overflow-hidden rounded-md"
                >
                  {/* Blur Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                    style={{
                      background: `linear-gradient(to bottom, rgba(31,79,112,0.6), rgba(76,52,140,0.5), rgba(0,0,0,0.7))`,
                      backdropFilter: "blur(4px)",
                    }}
                  ></div>

                  {/* Cat Icon (appears on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <img
                      src={catIcon}
                      alt="view icon"
                      className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
                    />
                  </div>

                  {/* Poster Image (zoom on hover) */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    src={item.poster}
                    alt={item.title}
                  />

                  {/* Rank (always visible) */}
                  <div className="rank p-1 text-sm md:text-base md:p-2 font-extrabold absolute top-0 bg-white text-center text-black z-30">
                    0{item.rank}
                  </div>
                </Link>

                {/* Title */}
                <h2
                  title={item.title}
                  className="title cursor-default text-sm font-semibold text-center truncate w-full mt-1"
                >
                  {item.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TrendingLayout;
