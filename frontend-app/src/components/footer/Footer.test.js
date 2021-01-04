import { render, screen } from "@testing-library/react";
import GlobalContextProvider from "../../context/GlobalContext";
import Footer from "./Footer";

// It has a UserInfo
// It has a social-links

test("It has a UserInfo", () => {
  render(
    <GlobalContextProvider>
      <Footer />
    </GlobalContextProvider>
  );
  screen.getByText(/Welcome/i);
});

test("It has a social-links", () => {
  render(
    <GlobalContextProvider>
      <Footer />
    </GlobalContextProvider>
  );
  screen.getByLabelText(/whatsapp/i);
});
