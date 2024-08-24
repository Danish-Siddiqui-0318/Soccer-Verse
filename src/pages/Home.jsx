import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import MainSec from "../components/MainSec.jsx";
import Fixtures from "../components/Fixtures.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { upcomingFootballMatches } from "../assets/data.js";

const Home = () => {
  const getRandomFixtures = (fixtures, count) => {
    const shuffled = [...fixtures].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  const fixturesToShow = getRandomFixtures(upcomingFootballMatches, 2);
  return (
    <div>
      <Navbar />
      <MainSec />
      <Fixtures data={fixturesToShow} />
      <Footer />
    </div>
  );
};

export default Home;
