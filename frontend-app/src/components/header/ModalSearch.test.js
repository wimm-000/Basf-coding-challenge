import { render, screen, fireEvent } from "@testing-library/react";
import ModalSearch from "./ModalSearch";

test("It has a toogle button closed", () => {
  const view = render(<ModalSearch />);
  const button = view.getByRole("button", { name: "closed" });
  expect(button).toBeInTheDocument();
});

test("It the first time is pressed it changes to open", () => {
  const view = render(<ModalSearch />);
  const button = view.getByRole("button", { name: "closed" });
  fireEvent.click(button);
  const openButton = view.getByRole("button", { name: "open" });
  expect(openButton).toBeInTheDocument();
});

test("It the second time is pressed it changes to close", () => {
  const view = render(<ModalSearch />);
  const button = view.getByRole("button", { name: "closed" });
  fireEvent.click(button);
  fireEvent.click(button);
  const closedButton = view.getByRole("button", { name: "closed" });
  expect(closedButton).toBeInTheDocument();
});

test("When open modal it displayed", () => {
  const view = render(<ModalSearch />);
  const button = view.getByRole("button", { name: "closed" });
  fireEvent.click(button);
  const modal = view.container.getElementsByClassName("search-form");
  expect(modal.length).toBe(1);
});
