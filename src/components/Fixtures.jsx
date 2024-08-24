import React from "react";
import { upcomingFootballMatches } from "../assets/data.js";

const Fixtures = ({ data = upcomingFootballMatches, className = "" }) => {
  return (
    <div
      className={`bg-gray-400 grid grid-cols-1 divide-y text-black ${className}`}
    >
      <h1 className="bg-white shadow-2xl text-center text-2xl">
        Upcoming Matches
      </h1>
      {data.map((fixture) => {
        const fixtureDate = new Date(fixture.date);
        const formattedDate = fixtureDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const formattedTime = fixtureDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div className="bg-white py-2" key={fixture.id}>
            <div align="center">
              <img src={fixture.imageUrl} width={75} alt="logo" />
              {fixture.competition}
            </div>
            <div className="text-center">
              {formattedTime} || {formattedDate}
            </div>
            <div className="text-center">Venue: {fixture.venue}</div>
            <div className="w-full flex p-1 justify-center items-center">
              <div className="w-[32%] text-right">{fixture.homeTeam}</div>
              <div className="w-[16%] text-center">0 : 0</div>
              <div className="w-[32%] text-left flex">{fixture.awayTeam}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fixtures;
