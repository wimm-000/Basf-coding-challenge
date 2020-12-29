import { render, screen, fireEvent } from "@testing-library/react";
import Loading from "./Loading";
import { ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";

// Has children
// isLoading is shown
// is notLoading do not display content but keep space

describe("It shows children text and icon if loading", () => {
  const customclassname = "customclassname";
  it("shows nothing if not isLoading", () => {
    const { container } = render(
      <Loading isLoading={false} Icon={SpinnerIcon} className={customclassname}>
        Searching
      </Loading>
    );
    expect(container.firstChild).toBeNull();
  });
  it("it accepts custom classnames", () => {
    const { container } = render(
      <Loading isLoading={true} Icon={SpinnerIcon} className={customclassname}>
        Searching
      </Loading>
    );
    const spinner = container;
    expect(spinner.getElementsByClassName(customclassname).length).toBe(1);
  });
  it("if isLoading display content", () => {
    const view = render(
      <Loading isLoading={true} Icon={SpinnerIcon} className={customclassname}>
        Searching
      </Loading>
    );
    view.getByText("Searching");
  });
  it("if icon display svg icon component", () => {
    const { container } = render(
      <Loading isLoading={true} Icon={SpinnerIcon} className={customclassname}>
        Searching
      </Loading>
    );
    const svg = container.firstChild.querySelector("svg");
    expect(svg).toBeTruthy();
  });
});
