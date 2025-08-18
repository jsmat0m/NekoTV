import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteApi } from "../services/useApi";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const toTitleCase = (str) =>
  str
    ?.toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const CharactersPage = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteApi(`/characters/${id}?page=`);

  const pages = data?.pages;

  return (
    <>
      <main className="pt-14 pb-5 mx-auto max-w-[800px]">
        {pages && !isLoading ? (
          <>
            <Heading>All Characters And Voice Actors</Heading>
            <div className="grid mb-4 mx-5 mt-2 grid-cols-12 gap-2">
              {pages?.map((page, pageIndex) => (
                <React.Fragment key={pageIndex}>
                  {page.data.response.map((item) => (
                    <div
                      key={item.id}
                      className="wrapper flex p-3 px-3 rounded-md items-center justify-between bg-lightbg col-span-12"
                    >
                      <div className="left gap-2 flex items-center">
                        <div className="poster h-11 w-11 overflow-hidden rounded-[50%]">
                          <img
                            className="h-full w-full object-cover"
                            src={item.imageUrl}
                            alt={item.name}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-xs text-white">
                            {toTitleCase(item.name)}
                          </h4>
                          <span className="text-xs text-lighttext">
                            {toTitleCase(item.role)}
                          </span>
                        </div>
                      </div>
                      <div className="right flex items-center gap-2">
                        {item.voiceActors.length !== 0 &&
                          item.voiceActors.map((actor) => (
                            <div
                              key={actor.id}
                              title={actor.name}
                              className="poster h-11 w-11 rounded-[50%] overflow-hidden"
                            >
                              <img
                                loading="lazy"
                                className="h-full w-full object-center object-cover"
                                src={actor.imageUrl}
                                alt={actor.name}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <button
              onClick={fetchNextPage}
              className="bg-lightbg mx-auto py-3 w-full hover:text-primary"
            >
              Load More
            </button>
          </>
        ) : (
          <Loader className="h-[100dvh]" />
        )}
      </main>
      <Footer />
    </>
  );
};

export default CharactersPage;
