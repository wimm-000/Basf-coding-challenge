import React from "react";
import { ReactComponent as BasfLogo } from "../../assets/images/basf-logo.svg";
import ModalSearch from "./ModalSearch";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <BasfLogo />
      </div>
      <h1 className="header__title">Coding Challenge</h1>
      <ModalSearch />
    </header>
  );
};

export default Header;
