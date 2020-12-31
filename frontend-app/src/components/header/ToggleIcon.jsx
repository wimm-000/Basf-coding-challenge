import React from "react";

const ToggleIcon = ({ isOpen = false, OpenIcon, CloseIcon, onClick }) => {
  return (
    <button
      className="toggle-icon"
      aria-label={`${isOpen ? "open" : "closed"}`}
      onClick={onClick}
    >
      {isOpen && OpenIcon && (
        <span className="toggle-icon__open">
          <OpenIcon />
        </span>
      )}
      {!isOpen && CloseIcon && (
        <span className="toggle-icon__close">
          <OpenIcon />
        </span>
      )}
    </button>
  );
};

export default ToggleIcon;
