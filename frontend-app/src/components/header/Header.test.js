import { render, screen, fireEvent } from "@testing-library/react";
import GlobalContextProvider from "../../context/GlobalContext";
import Header from "./Header";

test("It renders correctly with title", () => {
  render(
    <GlobalContextProvider>
      <Header />
    </GlobalContextProvider>
  );
  const titleText = screen.getByText(/Coding Challenge/i);
  expect(titleText).toBeInTheDocument();
});

test("It renders correctly with the logo", () => {
  const { container } = render(
    <GlobalContextProvider>
      <Header />
    </GlobalContextProvider>
  );
  expect(container.getElementsByClassName("header__logo").length).toBe(1);
});
