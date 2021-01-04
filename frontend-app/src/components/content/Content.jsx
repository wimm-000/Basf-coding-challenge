import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewOptionSelector from "./ViewOptionSelector";
import List from "./list/List";
import Table from "./table/Table";
const Content = () => {
  return (
    <section className="content">
      <BrowserRouter>
        <ViewOptionSelector />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default Content;
