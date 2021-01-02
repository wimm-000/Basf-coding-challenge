import { fireEvent, render, screen } from "@testing-library/react";
import Content from "./Content";

test("Render correcty", () => {
  render(<Content />);
  screen.getByText(/table/);
});
