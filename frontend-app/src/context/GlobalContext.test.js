import { fireEvent, render, screen } from "@testing-library/react";
// to test some aspects of context we will load the app
import App from "../App";

test("If loading graphql searching in search form is displayed", async () => {
  const { container } = render(<App />);
  const mainLoader = container.getElementsByClassName("loading--list-view");
  if (mainLoader.length >= 1) {
    const formLoader = await screen.findByText(/searching.../i);
  }
});
