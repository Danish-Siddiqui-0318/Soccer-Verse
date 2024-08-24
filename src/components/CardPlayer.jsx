import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { soccerPlayers } from "../assets/data";
import { Link } from "react-router-dom";

const CardPlayer = () => {
  const [dataLimit, setDataLimit] = useState(5git );
  const fetchMoreData = () => {
    if (dataLimit < soccerPlayers.length) {
      setDataLimit((prevLimit) => prevLimit + 6);
    }
  };

  const displayedPlayers = soccerPlayers.slice(0, dataLimit);

  return (
    <InfiniteScroll
      dataLength={displayedPlayers.length}
      next={fetchMoreData}
      hasMore={dataLimit < soccerPlayers.length}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {displayedPlayers.map((soccerPlayer) => (
          <Link to={`/player/${soccerPlayer.id}`} key={soccerPlayer.id}>
            <div className="rounded-md border">
              <img
                src={soccerPlayer.imageUrl}
                alt={soccerPlayer.name}
                className="h-[300px] w-full rounded-lg object-contain"
              />
              <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
                {soccerPlayer.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                Country : {soccerPlayer.nationality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default CardPlayer;
