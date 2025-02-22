import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewOptionSelector from "./ViewOptionSelector";
import List from "./list/List";
import Table from "./table/Table";
import Login from "./login/Login";
const Content = () => {
  return (
    <section className="content">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/list">
            <ViewOptionSelector />
            <List />
          </Route>
          <Route path="/table">
            <ViewOptionSelector />
            <Table />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default Content;
