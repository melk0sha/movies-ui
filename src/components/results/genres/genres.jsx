import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { GenresWrapper, Genre } from "components/results/genres/genres.styled";

const Genres = ({ genres }) => {
  const Genres = useMemo(() => genres.map((genre) => <Genre key={genre.id}>{genre.name}</Genre>), [genres]);

  return <GenresWrapper>{Genres}</GenresWrapper>;
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export { Genres };
