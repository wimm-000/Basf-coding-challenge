import React from "react";
import ID from "../../utils/id";

const Checkbox = ({ children, className, isChecked, onChange }) => {
  const checkboxProps = {
    className: "checkbox",
  };
  if (className) {
    checkboxProps.className += ` ${className}`;
  }
  if (isChecked) {
    checkboxProps.className += ` checkbox__cheked`;
  }
  const inputId = ID();
  return (
    <div {...checkboxProps}>
      <label class="checkbox__label" htmlFor={inputId}>
        <input
          id={inputId}
          data-testid="checkbox"
          type="checkbox"
          checked={isChecked}
          className="checkbox__input"
          onChange={onChange}
        />
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
