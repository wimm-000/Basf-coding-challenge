import { render, screen, fireEvent } from "@testing-library/react";
import { MAIN_BREAKPOINT } from "../../config/app";
import ModalSearch from "./ModalSearch";
import GlobalContextProvider from "../../context/GlobalContext";

test("It has a toogle button closed if width less than MAIN_BREAKPOINT", () => {
  const view = render(
    <GlobalContextProvider>
      <ModalSearch />
    </GlobalContextProvider>
  );
  const state = window.innerWidth > MAIN_BREAKPOINT ? "open" : "closed";
  const button = view.getByRole("button", { name: state });
  expect(button).toBeInTheDocument();
});

test("It the first time is pressed it changes to open if width less than MAIN_BREAKPOINT", () => {
  const view = render(
    <GlobalContextProvider>
      <ModalSearch />
    </GlobalContextProvider>
  );
  const state = window.innerWidth > MAIN_BREAKPOINT ? "open" : "closed";
  const button = view.getByRole("button", { name: state });
  fireEvent.click(button);
  const secondState = window.innerWidth > MAIN_BREAKPOINT ? "closed" : "open";
  const openButton = view.getByRole("button", { name: secondState });
  expect(openButton).toBeInTheDocument();
});

test("When open modal it displayed", () => {
  const view = render(
    <GlobalContextProvider>
      <ModalSearch />
    </GlobalContextProvider>
  );
  const state = window.innerWidth > MAIN_BREAKPOINT ? "open" : "closed";
  if (state === "closed") {
    const button = view.getByRole("button", { name: state });
    fireEvent.click(button);
  }
  const modal = view.container.getElementsByClassName("search-form");
  expect(modal.length).toBe(1);
});
