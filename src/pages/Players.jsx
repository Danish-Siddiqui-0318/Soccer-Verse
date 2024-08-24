import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Fixtures from "../components/Fixtures.jsx";
import CardPlayer from "../components/CardPlayer.jsx";
// import FixtureCards from "../components/FixtureCards.jsx";

const Players = () => {
  return (
    <div>
      <Navbar className="border-b-8 border-black" />
      <CardPlayer />
    </div>
  );
};

export default Players;
