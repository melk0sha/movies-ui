import React, { useCallback, useMemo, useState } from "react";
import { arrayOf } from "prop-types";
import { genreType } from "types";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";
import { connect } from "react-redux";

const Genres = ({ genres = [] }) => {
  const [activeGenreId, setActiveGenreId] = useState(0);

  const handleGenreClick = useCallback(
    (newGenreId) => {
      setActiveGenreId(newGenreId);
    },
    [setActiveGenreId]
  );

  const Genres = useMemo(
    () =>
      genres?.map((genre, idx) => (
        <Genre
          key={genre.id || idx}
          active={genre.id === activeGenreId || idx === activeGenreId}
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.value}
        </Genre>
      )),
    [activeGenreId, handleGenreClick, genres]
  );

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  genres: arrayOf(genreType)
};

const mapStateToProps = (state) => ({
  genres: state.movies.genres
});

export default connect(mapStateToProps)(Genres);
