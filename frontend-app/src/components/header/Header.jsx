import React, { useState } from "react";
import { ReactComponent as BasfLogo } from "../../assets/images/basf-logo.svg";
import ToggleIcon from "./ToggleIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <BasfLogo />
      </div>
      <h1 className="header__title">Coding Challenge</h1>
      <ToggleIcon isOpen={isOpen} onClick={handleToggle} />
    </header>
  );
};

export default Header;
