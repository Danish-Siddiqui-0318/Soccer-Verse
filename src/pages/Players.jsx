import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import CardPlayer from "../components/CardPlayer.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Players = () => {
  return (
    <>
      <Navbar className="border-b-4" />
      <h1 className="text-center text-2xl mt-4">
        Soccer Players From All Around the World
      </h1>
      <CardPlayer />
      <Footer />
    </>
  );
};

export default Players;
