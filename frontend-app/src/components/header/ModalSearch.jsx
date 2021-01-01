import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ToggleIcon from "./ToggleIcon";
import { ReactComponent as OpenIcon } from "../../assets/images/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import ID from "../../utils/id";
import { MAIN_BREAKPOINT } from "../../config/app";

const ModalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const size = useWindowSize()

  useEffect(() => {
    if(window.innerWidth > MAIN_BREAKPOINT) {
      setIsOpen(true)
    }
  }, [size.width])

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="modal-search">
      <ToggleIcon
        isOpen={isOpen}
        onClick={handleToggle}
        OpenIcon={OpenIcon}
        CloseIcon={CloseIcon}
      />
      {isOpen && <SearchForm />}
    </div>
  );
};

export default ModalSearch;
