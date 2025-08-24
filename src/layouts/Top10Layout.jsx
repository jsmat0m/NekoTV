import React, { useState } from "react";
import useTopTenStore from "../store/toptenStore";
import MiniPoster from "../components/MiniPoster";
import Heading from "../components/Heading";

const Top10Layout = () => {
  const [selectedTab, setSelectedTab] = useState("today");

  const tabs = [
    { name: "Today", key: "today" },
    { name: "Week", key: "week" },
    { name: "Month", key: "month" },
  ];

  const topTen = useTopTenStore((state) => state.topTen);

  const handleTabChange = (key) => {
    if (selectedTab !== key) setSelectedTab(key);
  };

  return (
    <div className="mx-2 mt-14">
      <div className="infor flex items-center mb-2 justify-between">
        <Heading className="ml-0 mb-0">Top 10</Heading>

        <div
          className="buttons flex bg-lightbg rounded-md items-center"
          role="tablist"
          aria-label="Top 10 timeframe"
        >
          {tabs.map((tab, i) => {
            const active = selectedTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                role="tab"
                aria-selected={active}
                aria-controls={`top10-${tab.key}`}
                className={`tab-btn px-4 py-1.5 rounded-md text-sm sm:text-base ${
                  active ? "bg-primary text-black" : "hover:text-primary"
                } ${i === 0 ? "first:rounded-l-md" : ""} ${
                  i === tabs.length - 1 ? "last:rounded-r-md" : ""
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="box bg-lightbg px-2 sm:px-4 py-2" id={`top10-${selectedTab}`}>
        {topTen[selectedTab]?.map((item) => (
          <div key={item.id} className="flex items-center gap-2 sm:gap-5 py-2">
            <h1
              className={`rank text-base sm:text-2xl font-extrabold ${
                item.rank <= 3 ? "border-primary border-b-2" : ""
              }`}
            >
              {item.rank < 10 ? `0${item.rank}` : item.rank}
            </h1>
            <MiniPoster item={item} />
          </div>
        ))}
      </div>

      <style>{`
        .tab-btn {
          transition: background-color 150ms ease, color 150ms ease, transform 120ms ease;
        }
        .tab-btn:focus {
          outline: 3px solid rgba(0,0,0,0.06);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default Top10Layout;
