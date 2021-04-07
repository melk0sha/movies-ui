import React from "react";
import { Switch, Route } from "react-router-dom";
import { PATHS } from "consts";
import Home from "routes/Home";
import Movie from "routes/Movie";
import NotFound from "routes/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path={PATHS.HOME} component={Home} />
    <Route path={PATHS.MOVIE} component={Movie} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
