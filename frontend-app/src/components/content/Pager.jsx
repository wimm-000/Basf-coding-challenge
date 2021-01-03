import React from "react";

const Pager = ({
  isFirstPage,
  isLastPage,
  onPrev = () => {},
  onNext = () => {},
}) => {
  return (
    <div className="pager">
      <button onClick={onPrev} className="pager__button" disabled={isFirstPage}>
        Previous
      </button>
      <button onClick={onNext} className="pager__button" disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pager;
