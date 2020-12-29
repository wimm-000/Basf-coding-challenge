import { fireEvent, render, screen } from "@testing-library/react";
import TypeSelector from "./TypeSelector";

// Two options type1 type2 2 can selected but one has always to be selected
// By default both are selected
test("Theres one checkbox for each typesSelected", () => {
  const options = [true, true];
  render(<TypeSelector typesSelected={options} />);
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes).toHaveLength(options.length);
});

test("If you push one checkbox it updates the value", () => {
  let options = [true, true];
  const handleChange = (values) => (options = values);
  render(<TypeSelector typesSelected={options} onChange={handleChange} />);
  const checkboxes = screen.getAllByRole("checkbox");
  const firstCheckbox = checkboxes[0];
  fireEvent.click(firstCheckbox);
  expect(options[0]).toBe(false);
});

test("We cannot set all values to false at least one is true", () => {
  let options = [true, false];
  const handleChange = (values) => {
    options = values;
  };
  render(<TypeSelector typesSelected={options} onChange={handleChange} />);
  const checkboxes = screen.getAllByRole("checkbox");
  const firstCheckbox = checkboxes[0];
  fireEvent.click(firstCheckbox);
  expect(options.every((value) => value)).toBe(false);
});
