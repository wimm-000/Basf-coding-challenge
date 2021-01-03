import React, { useContext, useEffect, useState } from "react";
import Input from "../common/Input";
import Loading from "../common/Loading";
import { ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import TypeSelector from "./TypeSelector";
import Button from "../common/Button";
import { GlobalContext } from "../../context/GlobalContext";

const SearchForm = () => {
  const { setSearchTerm, searching } = useContext(GlobalContext);

  const [searchString, setSearchString] = useState("");
  const [loadingText, setLoadingText] = useState("");
  const [options, setOptions] = useState([true, true]);

  const handleChange = (event) => {
    setSearchString(event.currentTarget.value);
  };

  useEffect(() => {
    if (searchString.length >= 3) {
      setSearchTerm(searchString);
    } else {
      setSearchTerm("");
    }
  }, [searchString]);

  useEffect(() => {
    if (searching) {
      setLoadingText("searching...");
    } else {
      setLoadingText("");
    }
  }, [searching]);

  const handleTypeChange = (values) => {
    setOptions(values);
  };

  return (
    <form className="search-form">
      <div className="search-form__fields">
        <Loading isLoading={loadingText} Icon={SpinnerIcon}>
          {loadingText}
        </Loading>
        <Input
          value={searchString}
          onChange={handleChange}
          className="input--search"
          Icon={SearchIcon}
          placeholder="Search by title, pattent number or chemical type"
        />
      </div>
      <div className="search-form__select">
        <TypeSelector typesSelected={options} onChange={handleTypeChange} />
      </div>
      <p className="search-form__info">
        Choose type of chemichals to filter search (multioption)
      </p>
      <fieldset className="search-form__submit">
        <Button isDisabled={true}>View seach results</Button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
