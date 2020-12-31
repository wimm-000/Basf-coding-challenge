import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ToggleIcon from "./ToggleIcon";
import { ReactComponent as OpenIcon } from "../../assets/images/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

const ModalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

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
