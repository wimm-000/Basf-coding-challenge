import { fireEvent, render, screen } from "@testing-library/react";
import Pager from "./Pager";

it("renders correctly with a prev and next btn", () => {
  render(<Pager />);
  screen.getByRole("button", { name: /Previous/ });
  screen.getByRole("button", { name: /Next/ });
});

it("if firtPage previous btn is disabled", () => {
  render(<Pager isFirstPage={true} />);
  const previous = screen.getByRole("button", { name: /Previous/ });
  expect(previous.disabled).toBe(true);
});

it("if lastPage next btn is disabled", () => {
  render(<Pager isLastPage={true} />);
  const next = screen.getByRole("button", { name: /Next/ });
  expect(next.disabled).toBe(true);
});

test("previous has a onPrev click event", () => {
  const handleClick = jest.fn();
  render(<Pager onPrev={handleClick} />);
  fireEvent.click(screen.getByRole("button", { name: /Previous/ }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("next has a onNext click event", () => {
  const handleClick = jest.fn();
  render(<Pager onNext={handleClick} />);
  fireEvent.click(screen.getByRole("button", { name: /Next/ }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
