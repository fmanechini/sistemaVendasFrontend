import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import salePage from '../pages/salePage/SalePage'
import registryPage from '../pages/registryPage/RegistryPage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={salePage} />
      <Route exact path="/register" component={registryPage} />
      <Redirect from="*" to={salePage} />
    </Switch>
  </BrowserRouter>
);
