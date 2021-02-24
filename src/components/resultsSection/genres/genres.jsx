import React, { useMemo } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { GenresWrapper, Genre } from "components/resultsSection/genres/genres.styled";

const Genres = ({ genres }) => {
  const Genres = useMemo(() => genres.map((genre) => <Genre key={genre.id}>{genre.name}</Genre>), [genres]);

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  genres: arrayOf(
    shape({
      id: number,
      name: string
    })
  )
};

Genres.defaultProps = {
  genres: []
};

export { Genres };
