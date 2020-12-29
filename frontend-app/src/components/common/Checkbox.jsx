import React from "react";

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
  return (
    <div {...checkboxProps}>
      <input
        data-testid="checkbox"
        type="checkbox"
        checked={isChecked}
        className="checkbox__input"
        onChange={onChange}
      />
      <label>{children}</label>
    </div>
  );
};

export default Checkbox;
