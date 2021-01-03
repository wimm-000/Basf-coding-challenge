import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../context/GlobalContext";
import { SEARCH_QUERY } from "../../../queries/SearchQuery";
import Loading from "../../common/Loading";
import NoResults from "../NoResults";
import Patent from "./Patent";
import { ReactComponent as LoadingIcon } from "../../../assets/images/spinner.svg";

const List = () => {
  const { searchTerm } = useContext(GlobalContext);
  // As we start we will load all items we well use fetch more on search term search
  const { loading, error, data, fetchMore } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: "",
      typeNumber: null,
      take: 100,
      skip: 0,
      orderBy: "id",
      isAsc: true,
    },
  });

  useEffect(() => {
    // TODO: reinit search
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="list-view">
        <Loading
          className="loading--list-view"
          Icon={LoadingIcon}
          isLoading={true}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-view">
        <div className="error">{`Error! ${error}`}</div>
      </div>
    );
  }

  if (!data || !data.patents.data.length) {
    return (
      <div className="list-view">
        <NoResults />
      </div>
    );
  }

  const listItems = data.patents.data;

  return (
    <div className="list-view">
      <div className="list-view__info">
        {searchTerm && (
          <div className="list-view__search-term">
            <span>Search term:</span> {searchTerm}
          </div>
        )}
        <div className="list-view__item-count">
          <strong>{data.patents.totalItems}</strong> patents
        </div>
      </div>
      <ul className="list-view__items">
        {listItems.map((patent, index) => (
          <Patent
            key={`patent-item-${index}`}
            patentNumber={patent.patent_number}
            title={patent.title}
            chemicalTypeProp={patent.chemical_type}
            typeNumber={patent.chemical_type_number}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
