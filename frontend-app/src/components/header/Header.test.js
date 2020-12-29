import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
// It renders corrently displaying logo and coding challenge test
test("It renders correctly with title", () => {
  render(<Header />);
  const titleText = screen.getByText(/Coding Challenge/i);
  expect(titleText).toBeInTheDocument();
});

test("It renders correctly with the logo", () => {
  const { container } = render(<Header />);
  expect(container.getElementsByClassName("header__logo").length).toBe(1);
});

test("It has a toogle button closed", () => {
  const view = render(<Header />);
  const button = view.getByRole("button", { name: "closed" });
  expect(button).toBeInTheDocument();
});

test("It the first time is pressed it changes to open", () => {
  const view = render(<Header />);
  const button = view.getByRole("button", { name: "closed" });
  fireEvent.click(button);
  const openButton = view.getByRole("button", { name: "open" });
  expect(openButton).toBeInTheDocument();
});

test("It the second time is pressed it changes to close", () => {
  const view = render(<Header />);
  const button = view.getByRole("button", { name: "closed" });
  fireEvent.click(button);
  fireEvent.click(button);
  const closedButton = view.getByRole("button", { name: "closed" });
  expect(closedButton).toBeInTheDocument();
});
