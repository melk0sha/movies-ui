import React, { useCallback, useMemo, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { arrayOf, func } from "prop-types";
import { getMoviesByParams } from "actions";
import { genreType } from "types";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";

const Genres = ({ genres = [], onGenresFilter }) => {
  const [activeGenreId, setActiveGenreId] = useState(0);

  const handleGenreClick = useCallback(
    (newGenre) => {
      const params = newGenre.value === "All" ? {} : { search: newGenre.value, searchBy: "genres" };
      onGenresFilter(params);
      setActiveGenreId(newGenre.id);
    },
    [setActiveGenreId]
  );

  const Genres = useMemo(
    () =>
      genres?.map((genre, idx) => (
        <Genre
          key={genre.id || idx}
          active={genre.id === activeGenreId || idx === activeGenreId}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.value}
        </Genre>
      )),
    [activeGenreId, handleGenreClick, genres]
  );

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  genres: arrayOf(genreType),
  onGenresFilter: func
};

const mapStateToProps = (state) => ({
  genres: state.movies.genres
});

const mapDispatchToProps = (dispatch) => ({
  onGenresFilter: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
