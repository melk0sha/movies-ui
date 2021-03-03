import React, { useCallback, useMemo, useState } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { genreType } from "types";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";

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
      genres.map((genre, idx) => (
        <Genre
          key={genre.id}
          active={genre.id === activeGenreId || idx === activeGenreId}
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </Genre>
      )),
    [activeGenreId, handleGenreClick, genres]
  );

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  genres: arrayOf(genreType)
};

export { Genres };
