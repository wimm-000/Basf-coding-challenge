import React from "react";
import { Link } from "react-router-dom";

const ViewOption = ({ children, Icon, route, isSelected = false }) => {
  return (
    <div className={`${isSelected ? "view-option--selected" : "view-option"}`}>
      <Link to={route} className="view-option__link">
        {Icon && <Icon />}
        {children}
      </Link>
    </div>
  );
};

export default ViewOption;
