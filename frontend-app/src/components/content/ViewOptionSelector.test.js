import { fireEvent, render, screen } from "@testing-library/react";
import ViewOptionSelector from "./ViewOptionSelector";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

beforeEach(() => {
  return render(
    <BrowserRouter>
      <ViewOptionSelector />
    </BrowserRouter>
  );
});
//
test("It has 2 options table and list view", () => {
  screen.getByText(/table/i);
  screen.getByText(/list/i);
});

test("When each is selected based on the route we have one selected or the other", () => {
  const history = createMemoryHistory();
  const listLink = screen.getByRole("link", { name: /list/ });
  // By defaul list view is selected
  const listContainer = listLink.parentElement;
  expect(listContainer.classList.contains("view-option--selected")).toBe(true);
  // On click table option table is selected
  const tableLink = screen.getByRole("link", { name: /table/ });
  fireEvent.click(tableLink);
  const tableContaier = tableLink.parentElement;
  expect(tableContaier.classList.contains("view-option--selected")).toBe(true);
  expect(listContainer.classList.contains("view-option--selected")).toBe(false);
  // And back to list again
  fireEvent.click(listLink);
  expect(tableContaier.classList.contains("view-option--selected")).toBe(false);
  expect(listContainer.classList.contains("view-option--selected")).toBe(true);
});
