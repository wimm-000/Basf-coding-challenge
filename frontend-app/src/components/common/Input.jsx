import React from "react";

const Input = ({
  value,
  onChange,
  placeholder = null,
  className = null,
  Icon = null,
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
      {Icon && (
        <div className="input__icon">
          <Icon />
        </div>
      )}
    </fieldset>
  );
};

export default Input;
