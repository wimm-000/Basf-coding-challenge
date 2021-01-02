import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";

test("Whatsapp link", () => {
  render(<SocialLinks />);
  screen.getByLabelText(/whatsapp/);
});
test("email link", () => {
  render(<SocialLinks />);
  screen.getByLabelText(/email/);
});
test("likedin link", () => {
  render(<SocialLinks />);
  screen.getByLabelText(/linkedin/);
});
