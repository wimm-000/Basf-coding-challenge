import React, { createContext, useEffect, useState } from "react";
import { addBodyScroll, removeBodyScroll } from "../utils/bodyScroll";
// eslint-disable-next-line
import cnConsole from "../utils/cnConsole";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isMenuOpen, setOpenMenu] = useState(null);
  useEffect(() => {
    if (isMenuOpen) {
      // Al abrir modal quitamos el scroll del body
      addBodyScroll();
      return () => {
        removeBodyScroll();
      };
    } else {
      removeBodyScroll();
    }
  }, [isMenuOpen]);
  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen,
        setOpenMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
