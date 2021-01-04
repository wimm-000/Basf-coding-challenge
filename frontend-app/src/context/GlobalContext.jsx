import React, { createContext, useEffect, useState } from "react";
import { MAIN_BREAKPOINT } from "../config/app";
import { useWindowSize } from "../hooks/useWindowSize";
import { addBodyScroll, removeBodyScroll } from "../utils/bodyScroll";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isSearchOpen, setSearchMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState("");
  const [typeSearch, setTypeSearch] = useState(null);
  const [name, setName] = useState("");
  const size = useWindowSize();
  useEffect(() => {
    if (isSearchOpen && size.width < MAIN_BREAKPOINT) {
      // Al abrir modal quitamos el scroll del body
      removeBodyScroll();
    } else {
      addBodyScroll();
    }
    return () => {
      addBodyScroll();
    };
  }, [isSearchOpen, size.width]);
  return (
    <GlobalContext.Provider
      value={{
        isSearchOpen,
        setSearchMenu,
        searchTerm,
        setSearchTerm,
        searching,
        setSearching,
        typeSearch,
        setTypeSearch,
        name,
        setName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
