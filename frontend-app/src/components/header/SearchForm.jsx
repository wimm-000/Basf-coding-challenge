import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Loading from "../common/Loading";
import { ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import TypeSelector from "./TypeSelector";

const SearchForm = () => {
  const [searchString, setSearchString] = useState("");
  const [loadingText, setLoadingText] = useState("");
  const [options, setOptions] = useState([true, true]);

  const handleChange = (event) => {
    setSearchString(event.currentTarget.value);
  };

  useEffect(() => {
    if (searchString.length >= 3) {
      setLoadingText("searching...");
    }
  }, [searchString]);

  const handleTypeChange = (values) => {
    setOptions(values);
  };

  return (
    <form className="search-form">
      <Loading isLoading={loadingText} Icon={SpinnerIcon}>
        {loadingText}
      </Loading>
      <Input value={searchString} onChange={handleChange} />
      <div className="search-form__select">
        <TypeSelector typesSelected={options} onChange={handleTypeChange} />
        <p className="search-form__info">
          Choose type of chemichals to filter search (multioption)
        </p>
      </div>
    </form>
  );
};

export default SearchForm;
