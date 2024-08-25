import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import MainSec from "../components/MainSec.jsx";
import Fixtures from "../components/Fixtures.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { upcomingFootballMatches } from "../assets/data.js";
import { Context } from "../context/context.jsx";
import Banner from "../components/Banner.jsx";

const Home = () => {
  const close = () => {
    document.getElementById("Div").classList.add("hidden");
  };
  const { msg } = useContext(Context);
  const getRandomFixtures = (fixtures, count) => {
    const shuffled = [...fixtures].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  const fixturesToShow = getRandomFixtures(upcomingFootballMatches, 2);
  return (
    <div>
      <Navbar />
      {msg && <Banner msg={msg} close={close} />}
      <MainSec />
      <Fixtures data={fixturesToShow} />
      <Footer />
    </div>
  );
};

export default Home;
