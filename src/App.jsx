import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import MainSec from "./components/MainSec";
import Fixtures from "./components/Fixtures";
import Footer from "./components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainSec />
      <Fixtures />
      <Footer />
    </>
  );
}

export default App;
