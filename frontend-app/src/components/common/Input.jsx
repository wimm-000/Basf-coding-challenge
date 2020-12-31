import React from "react";

const Input = ({
  value,
  onChange,
  placeholder = null,
  className = null,
  icon = null,
}) => {
  // Set up props conditionaly
  const inputPros = {};
  if (placeholder) {
    inputPros.placeholder = placeholder;
  }
  const fieldprops = {};
  if (className) {
    fieldprops.className = className;
  }
  return (
    <fieldset {...fieldprops}>
      <input type="text" {...inputPros} value={value} onChange={onChange} />
      {icon && <div className="input__icon">{icon}</div>}
    </fieldset>
  );
};

export default Input;
