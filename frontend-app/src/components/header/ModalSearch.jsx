import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ToggleIcon from "./ToggleIcon";

const ModalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="modal-search">
      <ToggleIcon isOpen={isOpen} onClick={handleToggle} />
      {isOpen && <SearchForm />}
    </div>
  );
};

export default ModalSearch;
