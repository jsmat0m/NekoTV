import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useApi } from "../services/useApi";
import Loader from "../components/Loader";
import InfoLayout from "../layouts/InfoLayout";
import Recommended from "../layouts/Recommended";
import MostPopular from "../layouts/MostPopular";
import MoreSeasons from "../layouts/MoreSeasons";
import Related from "../layouts/Related";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import VoiceActorsLayout from "../layouts/VoiceActorsLayout";

const DetailPage = () => {
  const { id } = useParams();
  const [bigPoster, setBigPoster] = useState(null);

  const titleId = id.split("-").slice(0, -1).join(" ").replace(",", " ");

  const endsWithNumber = /\d$/;
  const result = endsWithNumber.test(id);

  if (!result) {
    return <PageNotFound />;
  }

  const showBigPoster = (url) => {
    setBigPoster(url);
  };

  const { data: response, isError, error, isLoading } = useApi(`/anime/${id}`);
  const data = response?.data;

  if (isError) {
    return <PageNotFound />;
  }

  return (
    <main className={`${bigPoster ? "h-dvh overflow-hidden" : ""}`}>
      {/* Big Poster Modal */}
      {bigPoster && (
        <div className="bigposter fixed inset-0 flex justify-center items-center z-[100]">
          {/* Background overlay with gradient like homepage */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,79,112,0.7)] via-[rgba(76,52,140,0.6)] to-[rgba(0,0,0,0.9)] backdrop-blur-sm"></div>

          {/* Poster wrapper with shadow */}
          <div className="poster relative bg-black/50 rounded-xl shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setBigPoster(null)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-primary transition-colors"
            >
              <FaWindowClose />
            </button>

            {/* Poster image */}
            <img
              src={bigPoster}
              alt="poster"
              className="rounded-xl max-h-[90vh] max-w-[90vw] object-contain shadow-xl"
            />
          </div>
        </div>
      )}

      <Helmet>
        <title>{titleId}</title>
        <meta property="og:title" content="detail - NekoTV" />
      </Helmet>

      {data && !isLoading ? (
        <div className={`DetailPage relative pt-10 ${bigPoster && "blur-sm"} `}>
          <InfoLayout showBigPoster={showBigPoster} data={data} />

          <div className="row grid items-start gap-3 px-2 grid-cols-12">
            <div className="left col-span-12 xl:col-span-9">
              {data.moreSeasons.length !== 0 && (
                <MoreSeasons data={data.moreSeasons} />
              )}
              <VoiceActorsLayout id={id} />
              {data.recommended && (
                <div className="recomendation">
                  <Recommended data={data.recommended} />
                </div>
              )}
            </div>

            <div className="right col-span-12 xl:col-span-3">
              {data.related.length !== 0 && (
                <div className="related mt-5">
                  <Related data={data.related} />
                </div>
              )}
              {data.mostPopular && (
                <div className="most-popular col-span-12 mt-2 xl:col-span-3">
                  <MostPopular data={data.mostPopular} />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader className="h-[100dvh]" />
      )}
      <Footer />
    </main>
  );
};

export default DetailPage;
