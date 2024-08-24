import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Fixtures from "../components/Fixtures";
import Footer from "../components/Footer/Footer";

const FixturesPage = () => {
  return (
    <>
      <Navbar />
      <Fixtures className="mt-6" />
      <Footer />
    </>
  );
};

export default FixturesPage;
