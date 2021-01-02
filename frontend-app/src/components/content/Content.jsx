import React from "react";
import { BrowserRouter } from "react-router-dom";
import ViewOptionSelector from "./ViewOptionSelector";
import NoResults from "./NoResults";
const Content = () => {
  return (
    <section className="content">
      <BrowserRouter>
        <ViewOptionSelector />
        <NoResults />
      </BrowserRouter>
    </section>
  );
};

export default Content;
