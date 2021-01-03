import { fireEvent, render, screen } from "@testing-library/react";
// to test some aspects of context we will load the app
import App from "../App";

test("When searchterm is defined we will start search", () => {
  const { container } = render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: " a term" } });
  // list must be searchinf lading
  const mainLoader = container.getElementsByClassName("loading--list-view");
  expect(mainLoader.length).toBe(1);
});

test("If loading graphql searching in search form is displayed", async () => {
  const { container } = render(<App />);
  const mainLoader = container.getElementsByClassName("loading--list-view");
  if (mainLoader.length >= 1) {
    const formLoader = await screen.findByText(/searching.../i);
  }
});
