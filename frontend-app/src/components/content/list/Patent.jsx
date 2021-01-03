import React from "react";

const Patent = ({ patentNumber, title, typeNumber, chemicalTypeProp }) => {
  return (
    <li className="patent">
      <h3 className="patent__number">{patentNumber}</h3>
      <h4 className="patent__title">{title}</h4>
      <dl className="patent__type">
        <dt className="patent__number-type">
          Chemical <strong>type {typeNumber}</strong>:
        </dt>
        <dd className="patent__chemical-type">{chemicalTypeProp}</dd>
      </dl>
    </li>
  );
};

export default Patent;
