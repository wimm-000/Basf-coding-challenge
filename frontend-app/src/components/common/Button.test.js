import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

// it accepts a custom classname
// it has a class checked if checked

test("it accepted className prop", () => {
  const className = "myclassname";
  const { container } = render(
    <Button className={className} onClick={() => {}} />
  );
  expect(container.getElementsByClassName(className).length).toBe(1);
});

test("Text is passed as children", () => {
  const buttonText = "my button text";
  const view = render(
    <Button isDisabled={true} onClick={() => {}}>
      {buttonText}
    </Button>
  );
  view.getByText(buttonText);
});

test("if is disabled btn has disabled prop", () => {
  const { container } = render(<Button isDisabled={true} onClick={() => {}} />);
  const btn = container.firstChild;
  expect(btn.disabled).toBe(true);
});

test("it accepts an onclick event", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
