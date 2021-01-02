import { render, screen, fireEvent } from "@testing-library/react";
import ViewOption from "./ViewOption";
import { ReactComponent as Icon } from "../../assets/images/email.svg";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  return render(
    <BrowserRouter>
      <ViewOption isSelected={true} route="table" Icon={Icon}>
        Table view
      </ViewOption>
    </BrowserRouter>
  );
});

test("Renders correcty with its text", () => {
  screen.getByText(/Table view/);
});

test("It accepst an svg component for icon", () => {
  // it renders the svg name
  screen.getByText(/email/);
});

test("It has an onClick event that changes to route prop", () => {
  const link = screen.getByRole("link");
  expect(link.href).toMatch(/table/);
});

test("If isSelected has a view-option--selected class", () => {
  const view = render(
    <BrowserRouter>
      <ViewOption isSelected={true} route="table" Icon={Icon}>
        Table view
      </ViewOption>
    </BrowserRouter>
  );
  const viewOption = view.container.getElementsByClassName(
    "view-option--selected"
  );
  expect(viewOption.length).toBe(1);
});
