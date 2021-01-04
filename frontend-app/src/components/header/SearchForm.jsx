import React, { useContext, useEffect, useState } from "react";
import Input from "../common/Input";
import Loading from "../common/Loading";
import { ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import TypeSelector from "./TypeSelector";
import Button from "../common/Button";
import { GlobalContext } from "../../context/GlobalContext";

const SearchForm = () => {
  const { setSearchTerm, searching, setTypeSearch, setSearchMenu } = useContext(
    GlobalContext
  );

  const [searchString, setSearchString] = useState("");
  const [loadingText, setLoadingText] = useState("");
  const [options, setOptions] = useState([true, true]);
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (event) => {
    setSearchString(event.currentTarget.value);
  };

  // Start search if there is more than 3 characters
  useEffect(() => {
    if (searchString.length >= 3) {
      setSearchTerm(searchString);
    } else {
      setSearchTerm("");
    }
  }, [searchString]);

  // Activate spinner
  useEffect(() => {
    if (searching) {
      setLoadingText("searching...");
    } else {
      setLoadingText("");
    }
  }, [searching]);

  // Passing the type to de globalState
  useEffect(() => {
    const type1 = options[0];
    const type2 = options[1];
    let searchType = 1;
    if (type2) {
      searchType = 2;
    }
    if (type1 && type2) {
      searchType = null;
    }
    setTypeSearch(searchType);
  }, [options]);

  const handleTypeChange = (values) => {
    setOptions(values);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setSearchMenu(false);
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
        Choose type of chemichals to filter, at least one is mandatory
      </p>
      <fieldset className="search-form__submit">
        <Button isDisabled={isDisabled} onClick={handleClose}>
          View seach results
        </Button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
