import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";
//
// If you have name it is displayed

test("If loginType google it shows google icon", () => {
  const view = render(<UserInfo type="google" />);
  screen.getByText(/google/i);
});

test("If loginType github it shows github icon", () => {
  const view = render(<UserInfo type="github" />);
  screen.getByText(/github/i);
});

test("If loginType login it shows smilie icon", () => {
  const view = render(<UserInfo type="login" />);
  screen.getByText(/smilie/i);
});

test("If loginType incognity it shows incognito icon", () => {
  const view = render(<UserInfo type="incognito" />);
  screen.getByText(/incognito/i);
});

test("If you have name it is displayed", () => {
  const view = render(<UserInfo type="incognito" name="anomimous" />);
  screen.getByText(/anomimous/i);
});
