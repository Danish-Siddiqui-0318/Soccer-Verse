import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { top10SoccerPlayers, soccerTeams } from "../assets/data.js";
import Footer from "../components/Footer/Footer.jsx";

const Rankings = () => {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDate();
  const monthName = monthNames[currentDate.getMonth()]; // Get the month name
  const year = currentDate.getFullYear();
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-4xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <h2 className="text-3xl font-bold">
          Current Ranking :{`Till ${day} ${monthName} ${year}`}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-200 border p-4">
          {top10SoccerPlayers.map((player) => (
            <li
              key={player.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <p className="text-center">Rank {player.id}</p>
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                  src={player.imageUrl}
                  alt={player.name}
                />
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {player.name}
                      </h3>
                      <p className="text-sm">{player.nationality}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        Ranking Points : {player.rankingPoints}
                      </p>
                      <p className="text-lg font-semibold">
                        Goals : {player.goals}
                      </p>
                      <p className="text-lg font-semibold">
                        Assists : {player.assists}
                      </p>
                      <p className="text-lg font-semibold">
                        Total Goals : {player.totalGoals}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-3xl font-bold">
          Best Country By Ranking :{`Till ${day} ${monthName} ${year}`}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-200 border text-center">
          {soccerTeams.map((country) => (
            <li
              key={country.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between items-center"
            >
              <div className="text-center sm:text-left sm:w-1/3">
                <p className="pt-8 px-4">
                  Rank {country.id} <br /> {country.country}
                </p>
              </div>

              <div className="flex w-full sm:w-2/3 space-x-2 sm:space-x-4 items-center">
                <img
                  className="h-20 w-20 flex-shrink-0 rounded object-cover sm:h-32 sm:w-32"
                  src={country.flagImageUrl}
                  alt={country.country}
                />
                <div className="flex w-full flex-col justify-center">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    Best Players of This Team
                  </h3>
                  <div className="space-y-1">
                    {country.players.map((player) => (
                      <div key={player.id} className="text-left px-4">
                        <h4 className="text-md font-semibold">{player.name}</h4>
                        <p className="text-sm">{player.nationality}</p>
                        <p className="text-sm">{player.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Rankings;
