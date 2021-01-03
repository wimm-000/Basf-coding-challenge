import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const NoResults = () => {
  const context = useContext(GlobalContext);

  return (
    <div className="no-results">
      <h3 className="no-results__title">No results available</h3>
      <ul className="no-results__actions">
        <li className="no-results__action">
          <button
            className="no-results__button"
            onClick={() => context.setSearchTerm("")}
          >
            View All
          </button>
        </li>
        <li className="no-results__action">
          <button
            className="no-results__button"
            onClick={() => context.setSearchMenu(true)}
          >
            Make a new search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NoResults;
