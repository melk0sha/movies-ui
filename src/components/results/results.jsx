import React, { useEffect, useState } from "react";
import { ResultsHeader, ResultsWrapper } from "components/results/results.styled";
import { Genres } from "components/results/genres";
import { getGenres } from "api";

const Results = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genresData = getGenres();
    setGenres(genresData);
  }, []);

  return (
    <ResultsWrapper>
      <ResultsHeader>
        <Genres genres={genres} />
      </ResultsHeader>
    </ResultsWrapper>
  );
};

export { Results };
