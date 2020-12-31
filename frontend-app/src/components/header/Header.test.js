import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("It renders correctly with title", () => {
  render(<Header />);
  const titleText = screen.getByText(/Coding Challenge/i);
  expect(titleText).toBeInTheDocument();
});

test("It renders correctly with the logo", () => {
  const { container } = render(<Header />);
  expect(container.getElementsByClassName("header__logo").length).toBe(1);
});
