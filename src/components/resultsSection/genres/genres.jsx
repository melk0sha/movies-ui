import React, { useCallback, useMemo } from "react";
import { generatePath, useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { getMoviesByParams, changeActiveGenre } from "actions";
import { PATHS } from "consts";
import { moviesSortByType } from "types";
import { genres } from "consts/genres";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";

const Genres = ({ moviesSortBy, activeGenre, searchValue, onGenresFilter, onGenreChange }) => {
  const history = useHistory();

  const handleGenreClick = useCallback(
    (newGenre) => {
      if (searchValue) {
        const params = { sortBy: moviesSortBy, search: searchValue, searchBy: "title", filter: newGenre.value };
        const path = generatePath(PATHS.RESULTS, { value: searchValue });

        history.push(path);
        onGenresFilter(params);
      }

      onGenreChange(newGenre.value);
    },
    [searchValue, moviesSortBy]
  );

  const Genres = useMemo(
    () =>
      genres.map((genre, idx) => (
        <Genre key={genre.id || idx} active={genre.value === activeGenre} onClick={() => handleGenreClick(genre)}>
          {genre.value}
        </Genre>
      )),
    [activeGenre, handleGenreClick]
  );

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  moviesSortBy: moviesSortByType,
  searchValue: string,
  activeGenre: string,
  onGenresFilter: func
};

const mapStateToProps = (state) => ({
  moviesSortBy: state.app.moviesSortBy,
  searchValue: state.app.searchValue,
  activeGenre: state.app.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenresFilter: bindActionCreators(getMoviesByParams, dispatch),
  onGenreChange: bindActionCreators(changeActiveGenre, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
