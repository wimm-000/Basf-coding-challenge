import React from "react";
import { BrowserRouter } from "react-router-dom";
import ViewOptionSelector from "./ViewOptionSelector";
import List from "./list/List";
const Content = () => {
  return (
    <section className="content">
      <BrowserRouter>
        <ViewOptionSelector />
        <List />
      </BrowserRouter>
    </section>
  );
};

export default Content;
