import React, { createContext, useState, useContext } from "react";

export const Context = createContext();

const PlayerContextProvider = (props) => {
  const [msg, setMsg] = useState("");

  const contextValue = {
    msg,
    setMsg,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default PlayerContextProvider;
