import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const formatAnimeName = (name) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ContinueWatching = () => {
  const [continueList, setContinueList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("continueWatching")) || [];
    setContinueList(stored.slice(0, 60)); 
  }, []);

  const handleClick = (animeId, epId) => {
    navigate(`/watch/${animeId}?ep=${epId}`);
  };

  const handleRemove = (index) => {
    const updated = [...continueList];
    updated.splice(index, 1);
    setContinueList(updated);
    localStorage.setItem("continueWatching", JSON.stringify(updated));
  };

  if (continueList.length === 0) return null; 

  return (
    <div className="my-5">
      <h2 className="text-xl font-bold text-[var(--primary)] mb-3">Continue Watching</h2>
      <div className="grid grid-cols-6 gap-2">
        {continueList.map((item, index) => (
          <div
            key={item.animeId + "-" + item.episodeId}
            className="bg-[#145183] rounded-lg p-3 relative cursor-pointer hover:opacity-90"
          >
            <button
              className="absolute top-1 right-1 text-white-600 font-extrabold text-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(index);
              }}
            >
              ✕
            </button>

            <div
              className="text-base text-white font-semibold truncate"
              onClick={() => handleClick(item.animeId, item.episodeId)}
            >
              {formatAnimeName(item.animeName)}
            </div>
            <div
              className="text-sm text-gray-200 mt-1"
              onClick={() => handleClick(item.animeId, item.episodeId)}
            >
              Episode: {item.episodeNumber} (ID: {item.episodeId})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
