import { render } from "@testing-library/react";
import Checkbox from "./Checkbox";

// it accepts a custom classname
// it has a class checked if checked

test("it accepted className prop", () => {
  const className = "myclassname";
  const { container } = render(
    <Checkbox isChecked={true} className={className} onChange={() => {}} />
  );
  expect(container.getElementsByClassName(className).length).toBe(1);
});

test("it has a class checked if checked", () => {
  const { container } = render(
    <Checkbox isChecked={true} onChange={() => {}} />
  );
  expect(container.getElementsByClassName("checkbox__cheked").length).toBe(1);
});

test("label is passed as children", () => {
  const labelText = "my label text";
  const view = render(
    <Checkbox isChecked={true} onChange={() => {}}>
      {labelText}
    </Checkbox>
  );
  view.getByText(labelText);
});

test("if isChecked value is true", () => {
  const labelText = "my label text";
  const view = render(
    <Checkbox isChecked={true} onChange={() => {}}>
      {labelText}
    </Checkbox>
  );
  const isChecked = view.getByTestId("checkbox");
  expect(isChecked.checked).toBe(true);
});
