import React, { useCallback, useMemo, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func } from "prop-types";
import { getMoviesByParams } from "actions";
import { ALL_GENRES_OPTION } from "consts";
import { moviesSortByType } from "types";
import { genres } from "consts/genres";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";

const Genres = ({ moviesSortBy, onGenresFilter }) => {
  const [activeGenreId, setActiveGenreId] = useState(0);

  const handleGenreClick = useCallback(
    (newGenre) => {
      const params =
        newGenre.value === ALL_GENRES_OPTION.value
          ? { sortBy: moviesSortBy }
          : { sortBy: moviesSortBy, search: newGenre.value, searchBy: "genres" };

      onGenresFilter(params);
      setActiveGenreId(newGenre.id);
    },
    [setActiveGenreId]
  );

  const Genres = useMemo(
    () =>
      genres.map((genre, idx) => (
        <Genre
          key={genre.id || idx}
          active={genre.id === activeGenreId || idx === activeGenreId}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.value}
        </Genre>
      )),
    [activeGenreId, handleGenreClick]
  );

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  moviesSortBy: moviesSortByType,
  onGenresFilter: func
};

const mapStateToProps = (state) => ({
  moviesSortBy: state.app.moviesSortBy
});

const mapDispatchToProps = (dispatch) => ({
  onGenresFilter: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
