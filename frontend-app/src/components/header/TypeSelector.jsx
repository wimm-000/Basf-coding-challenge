import React from "react";
import Checkbox from "../common/Checkbox";

const TypeSelector = ({ typesSelected, onChange }) => {
  const handleChange = (isChecked, index) => {
    let values = [...typesSelected];
    values[index] = isChecked;
    const allCheched = values.every((value) => value);
    onChange(allCheched ? typesSelected : values);
  };
  return (
    <fieldset className="type-selector">
      {typesSelected.map((isChecked, index) => (
        <Checkbox
          key={`type-${index}`}
          isChecked={isChecked}
          onChange={(event) => handleChange(event.target.checked, index)}
        >
          Type {index + 1}
        </Checkbox>
      ))}
    </fieldset>
  );
};

export default TypeSelector;
