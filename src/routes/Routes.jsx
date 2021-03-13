import React from "react";
import { Switch, Route } from "react-router-dom";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";
import { Home, Movie } from "routes";
import { PATHS } from "consts";
import { Main } from "assets/styles";

const Routes = (props) => {
  return (
    <Main>
      <Switch>
        <Route exact path={PATHS.HOME}>
          <Home {...props} />
        </Route>
        {/* <Route exact path={PATHS.HOME} render={(props) => <Home {...props} />} /> */}
        {/* <Route path={PATHS.MOVIE} component={Movie} /> */}
        <Route path={PATHS.MOVIE}>
          <Movie {...props} />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Main>
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
