import React from "react";
import { Switch, Route } from "react-router-dom";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";
import { Home, Movie } from "routes";
import { PATHS } from "consts";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path={PATHS.HOME}>
        <Home {...props} />
      </Route>
      <Route path={PATHS.MOVIE}>
        <Movie {...props} />
      </Route>
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};

Routes.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieUpdate: func
};

export { Routes };
