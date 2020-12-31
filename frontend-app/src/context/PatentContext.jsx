import React, { createContext, useReducer } from "react";
import { PatentReducer } from "./reducers/PatentReducer";

export const PatentContext = createContext();

const PatentContextProvider = ({ children }) => {
  const [patent, patentDispatch] = useReducer(PatentReducer, []);
  return (
    <PatentContext.Provider
      value={{
        patent,
        patentDispatch,
      }}
    >
      {children}
    </PatentContext.Provider>
  );
};

export default PatentContextProvider;
