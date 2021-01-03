import React, { useState, useEffect, useContext } from "react";
import SearchForm from "./SearchForm";
import ToggleIcon from "./ToggleIcon";
import { ReactComponent as OpenIcon } from "../../assets/images/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import ID from "../../utils/id";
import { MAIN_BREAKPOINT } from "../../config/app";
import { GlobalContext } from "../../context/GlobalContext";

const ModalSearch = () => {
  const { isSearchOpen, setSearchMenu } = useContext(GlobalContext);

  const size = useWindowSize();

  useEffect(() => {
    if (window.innerWidth > MAIN_BREAKPOINT) {
      setSearchMenu(true);
    }
  }, [size.width]);

  const handleToggle = () => {
    setSearchMenu(!isSearchOpen);
  };
  return (
    <div className="modal-search">
      <ToggleIcon
        isOpen={isSearchOpen}
        onClick={handleToggle}
        OpenIcon={OpenIcon}
        CloseIcon={CloseIcon}
      />
      {isSearchOpen && <SearchForm />}
    </div>
  );
};

export default ModalSearch;
