import { fireEvent, render, screen } from "@testing-library/react";
import NoResults from "./NoResults";
import GlobalContextProvider from "../../context/GlobalContext";

beforeEach(() => {
  return render(
    <GlobalContextProvider>
      <NoResults />
    </GlobalContextProvider>
  );
});

test("It renders correctly", () => {
  screen.getByText(/No results available/);
});

test("It has a link when pressed calls ClearSearh", () => {
  screen.getByRole("button", { name: /View all/i });
});
test("It has a link when pressed calls OpenSearchBox", () => {
  screen.getByRole("button", { name: /new search/i });
});
