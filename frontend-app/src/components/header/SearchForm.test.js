import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

// input search, type select and button to close window if searchs greater than 0
// on input debouce 2 seconds and search with graphql if 3 or more characters
// on seaching spinner visible and shows number of results
// on data recived load it into searchContext

test("it recives input correctly", () => {
  render(<SearchForm />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "testing" } });
  expect(input.value).toBe("testing");
});

test("if it has more than 3 or more characters it starts loading data", async () => {
  render(<SearchForm />);
  expect(screen.queryByText(/searching/)).toBeNull();
  await userEvent.type(screen.getByRole("textbox"), "123");
  expect(await screen.findByText(/searching/)).toBeInTheDocument();
});

test("We can select the type of seach", () => {
  render(<SearchForm />);
  const firstButton = screen.getByText(/Type 1/i);
  fireEvent.click(firstButton);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes[0].checked).toBe(false);
});

test("when we have values button is active", () => {});
test("when we have values we change spinner to show text with number results", () => {});
