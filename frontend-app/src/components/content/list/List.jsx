import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../context/GlobalContext";
import { SEARCH_QUERY } from "../../../queries/SearchQuery";
import Loading from "../../common/Loading";
import NoResults from "../NoResults";
import Patent from "./Patent";
import { ReactComponent as LoadingIcon } from "../../../assets/images/spinner.svg";
import Pager from "../Pager";

const List = () => {
  const { searchTerm, setSearching, typeSearch } = useContext(GlobalContext);
  // As we start we will load all items we well use fetch more on search term search
  const { loading, error, data, fetchMore } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: "",
      typeNumber: null,
      take: 20,
      skip: 0,
      orderBy: "id",
      isAsc: true,
    },
  });

  useEffect(() => {
    handleMore(searchTerm, typeSearch);
  }, [searchTerm, typeSearch]);

  useEffect(() => {
    setSearching(loading);
  }, [loading]);

  const handleMore = (term, typeNumber = null, skip = 0) => {
    fetchMore({
      variables: {
        skip,
        filter: term,
        typeNumber,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

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
      <Pager
        isFirstPage={data.patents.skip === 0}
        isLastPage={
          data.patents.totalPages ===
          Math.ceil(data.patents.skip / data.patents.take)
        }
        onNext={(event) =>
          handleMore(
            searchTerm,
            typeSearch,
            data.patents.skip + data.patents.take
          )
        }
        onPrev={(event) => {
          handleMore(
            searchTerm,
            typeSearch,
            data.patents.skip - data.patents.take
          );
        }}
      >
        Page {Math.floor(data.patents.skip / data.patents.take) + 1} of{" "}
        {data.patents.totalPages}
      </Pager>
    </div>
  );
};

export default List;
