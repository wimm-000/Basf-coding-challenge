import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// It has a UserInfo
// It has a social-links

test("It has a UserInfo", () => {
  render(<Footer />);
  screen.getByText(/Welcome/i);
});

test("It has a social-links", () => {
  render(<Footer />);
  screen.getByLabelText(/whatsapp/i);
});
