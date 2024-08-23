import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import MainSec from "./components/MainSec";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainSec />
    </>
  );
}

export default App;
