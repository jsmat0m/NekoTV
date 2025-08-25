import { useState } from "react";
import { Helmet } from "react-helmet";
import SoundsInfo from "../components/SoundsInfo";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import CircleRatting from "../components/CircleRatting";

const formatName = (str) =>
  str
    .replace(/-/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const InfoLayout = ({ data, showBigPoster }) => {
  const [showFull, setShowFull] = useState(false);

  const colors = [
    "#d0e6a5",
    "#ffbade",
    "#fc887b",
    "#ccabda",
    "#abccd8",
    "#d8b2ab",
    "#86e3ce",
  ];

  return (
    <>
      <Helmet>
        <title>{data?.title ? toTitleCase(data.title) : "Loading..."}</title>
      </Helmet>

      <div className="banner min-h-[700px] relative w-full pt-10 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={data.poster}
            alt={data.title}
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(6px) brightness(100%)",
            }}
          ></div>
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(31,79,112,0.7) 0%, rgba(76,52,140,0.6) 50%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>

        <div className="content relative z-10 max-w-[1200px] w-full mx-auto flex flex-col items-start md:flex-row gap-6 mb-2 px-2">
          <div className="left w-full md:w-60 xl:w-80 flex justify-center">
            <div
              className="posterImg cursor-pointer rounded-xl overflow-hidden shadow-2xl bg-black/40 p-2"
              onClick={() => showBigPoster(data.poster)}
            >
              <img
                src={data.poster}
                alt={data.title}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="right mt-3 w-full flex flex-col gap-3 text-white">
            <div className="path hidden md:flex items-center gap-2 text-sm font-medium opacity-80">
              <Link to="/home" className="hover:text-primary">
                Home
              </Link>
              <span className="h-1 w-1 rounded-full bg-primary"></span>
              <Link to={`/animes/${data.type.toLowerCase()}`} className="hover:text-primary">
                {data.type}
              </Link>
              <span className="h-1 w-1 rounded-full bg-primary"></span>
              <span>{data.title}</span>
            </div>

            <h1 className="title text-2xl md:text-4xl font-extrabold drop-shadow-lg">
              {data.title}
            </h1>

            {data.alternativeTitle && (
              <div className="gray text-lg font-semibold italic opacity-80">
                {data.alternativeTitle}
              </div>
            )}
            {data.japanese && (
              <div className="gray text-lg font-semibold opacity-80">
                {data.japanese}
              </div>
            )}

            <div className="sounds flex items-center flex-wrap gap-2 my-2 text-sm">
              <SoundsInfo
                episodes={{
                  rating: data.rating,
                  ...data.episodes,
                }}
              />
              <span className="h-1 w-1 rounded-full bg-primary"></span>
              <span className="uppercase text-gray-200 font-bold">{data.type}</span>
              <span className="h-1 w-1 rounded-full bg-primary"></span>
              <span className="text-gray-200 font-bold">{data.duration}</span>
            </div>

            <div className="cercle h-14 w-14">
              <CircleRatting rating={data.MAL_score} />
            </div>

            {data.id && (
              <div className="watch-btn my-4 w-full sm:w-1/2">
                <Link to={`/watch/${data.id}`} className="block w-full">
                  <button className="flex justify-center items-center gap-2 py-2 px-4 rounded-3xl text-lg text-black bg-primary hover:bg-primary/80 transition-colors w-full">
                    <FaCirclePlay />
                    <span>Watch Now</span>
                  </button>
                </Link>
              </div>
            )}

            <div className="genres flex flex-wrap gap-2">
              {data.genres.map((genre, index) => (
                <Link to={`/animes/genre/${genre.toLowerCase()}`} key={genre}>
                  <p
                    style={{ background: colors[index % colors.length] }}
                    className="px-2 border border-black text-black py-0.5 rounded-sm text-sm"
                  >
                    {genre}
                  </p>
                </Link>
              ))}
            </div>

            {data.synopsis && (
              <div className="overview text-gray-200">
                <p
                  className={`${showFull ? "line-clamp-none" : "line-clamp-3"} text-balance`}
                >
                  {data.synopsis}
                </p>
                <span
                  onClick={() => setShowFull(!showFull)}
                  className="text-sm cursor-pointer font-bold hover:text-primary"
                >
                  {showFull ? " - LESS" : " - MORE"}
                </span>
              </div>
            )}

            <div className="lightBorder"></div>

            <div className="info flex-col sm:flex-row flex gap-5 text-sm">
              <div className="flex gap-1 status">
                <p className="font-extrabold">Status :</p>
                <span className="text-gray-200">{data.status}</span>
              </div>
              <div className="flex gap-1 aired">
                <p className="font-extrabold">Aired :</p>
                <div className="text-gray-200 flex items-center gap-2">
                  <span>{data.aired.from}</span>
                  {data.aired.to && (
                    <>
                      <FaArrowRight />
                      <span>{data.aired.to}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lightBorder"></div>

            {data.studios && (
              <>
                <div className="studio">
                  <span>Studio :</span>{" "}
                  <span className="text-primary font-semibold">
                    {formatName(data.studios)}
                  </span>
                </div>
                <div className="lightBorder"></div>
              </>
            )}

            <div className="studio">
              <h4 className="text-center mb-2">Producers</h4>
              {data.producers && (
                <ul className="flex flex-wrap gap-2">
                  {data.producers.map((producer, index) => (
                    <li
                      key={producer}
                      style={{ color: colors[index % colors.length] }}
                    >
                      {formatName(producer)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lightBorder"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLayout;
