import React from "react";
import ViewOptionSelector from "./ViewOptionSelector";
import { BrowserRouter } from "react-router-dom";
const Content = () => {
  return (
    <section className="content">
      <BrowserRouter>
        <ViewOptionSelector />
      </BrowserRouter>
    </section>
  );
};

export default Content;
