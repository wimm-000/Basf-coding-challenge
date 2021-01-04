import { fireEvent, render, screen } from "@testing-library/react";
import Content from "./Content";
import GlobalContextProvider from "../../context/GlobalContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";

test("Render correcty", () => {
  render(
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <Content />
      </GlobalContextProvider>
    </ApolloProvider>
  );
  screen.getByText(/Login/);
});
