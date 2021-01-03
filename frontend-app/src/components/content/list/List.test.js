import { render, screen, wait } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { MockedProvider } from "@apollo/react-testing";

import { client } from "../../../apollo/client";
import GlobalContextProvider from "../../../context/GlobalContext";
import List from "./List";

test("On load it will start loading items showing the spinner", () => {});
test("If there is an error it ", () => {});
test("It displays the current search term", () => {});
test("It displays number of items", () => {});

import { SEARCH_QUERY } from "../../../queries/SearchQuery";

const mock = [
  {
    request: {
      query: SEARCH_QUERY,
      variables: {
        filter: "",
        typeNumber: null,
        take: 2,
        skip: 0,
        orderBy: "id",
        isAsc: true,
      },
    },
    result: {
      patents: {
        data: [
          {
            patent_number: "US2005158396",
            title: "ANTIOXIDATIVE PREPARATIONS",
            chemical_type: "Antioxidant",
            chemical_type_number: 1,
            __typename: "Patent",
          },
          {
            patent_number: "US2009095164",
            title:
              "METHOD OF ENHANCING BEVERAGES BY MEANS OF A UNIQUE MICROENCAPSULATED DELIVERY SYSTEM",
            chemical_type: "Additives General",
            chemical_type_number: 1,
            __typename: "Patent",
          },
        ],
        totalItems: 7039,
        totalPages: 3520,
        take: 2,
        skip: 0,
        __typename: "PagerData",
      },
    },
  },
];

test("it renders withoout error", () => {
  render(
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <MockedProvider mocks={mock} addTypename={false}>
          <List />
        </MockedProvider>
      </GlobalContextProvider>
    </ApolloProvider>
  );
});

test("should render loading state on load", () => {
  const { container } = render(
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <MockedProvider mocks={[]} addTypename={false}>
          <List />
        </MockedProvider>
      </GlobalContextProvider>
    </ApolloProvider>
  );
  const loading = container.getElementsByClassName("loading--list-view");
  expect(loading.length).toBe(1);
});

test("it load patents from api ", async () => {
  const { container } = render(
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <MockedProvider mocks={mock} addTypename={false}>
          <List />
        </MockedProvider>
      </GlobalContextProvider>
    </ApolloProvider>
  );
  await screen.findByText(/US2005158396/);
});
