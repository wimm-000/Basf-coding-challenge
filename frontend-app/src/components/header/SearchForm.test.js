import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GlobalContextProvider from "../../context/GlobalContext";
import SearchForm from "./SearchForm";

// input search, type select and button to close window if searchs greater than 0
// on input debouce 2 seconds and search with graphql if 3 or more characters
// on seaching spinner visible and shows number of results
// on data recived load it into searchContext

beforeEach(() => {
  render(
    <GlobalContextProvider>
      <SearchForm />
    </GlobalContextProvider>
  );
});

test("it recives input correctly", () => {
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "testing" } });
  expect(input.value).toBe("testing");
});

test("We can select the type of seach", () => {
  const firstButton = screen.getByText(/Type 1/i);
  fireEvent.click(firstButton);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes[0].checked).toBe(false);
});

test("when we have values button is active", () => {});
test("when we have values we change spinner to show text with number results", () => {});
