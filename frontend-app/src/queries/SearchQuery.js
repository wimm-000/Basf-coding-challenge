import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query Search(
    $filter: String
    $typeNumber: Int
    $take: Int
    $skip: Int
    $orderBy: String
    $isAsc: Boolean
  ) {
    patents(
      filter: $filter
      typeNumber: $typeNumber
      take: $take
      skip: $skip
      orderBy: $orderBy
      isAsc: $isAsc
    ) {
      data {
        patent_number
        title
        chemical_type
        chemical_type_number
      }
      totalItems
      totalPages
      take
      skip
    }
  }
`;
