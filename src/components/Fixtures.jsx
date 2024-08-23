import React from "react";
import { upcomingFootballMatches } from "../assets/data.js";

const getRandomFixtures = (fixtures, count) => {
  const shuffled = [...fixtures].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const Fixtures = () => {
  const fixturesToShow = getRandomFixtures(upcomingFootballMatches, 2);

  return (
    <div className="bg-gray-400 grid grid-cols-1 divide-y text-black">
      <h1 className="bg-white shadow-2xl text-center text-2xl">
        Upcoming Matches
      </h1>
      {fixturesToShow.map((fixture) => (
        <div className="bg-white py-2" key={fixture.id}>
          <div align="center">
            <img src={fixture.imageUrl} width={25} alt="logo" />
            {fixture.competition}
          </div>
          <div className="text-center">
            {fixture.time} || {fixture.date}
          </div>
          <div className="text-center">Venue: {fixture.venue}</div>
          <div className="w-full flex p-1 justify-center items-center">
            <div className="w-[32%] text-right">{fixture.homeTeam}</div>
            <div className="w-[16%] text-center">0 : 0</div>
            <div className="w-[32%] text-left flex">{fixture.awayTeam}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fixtures;
