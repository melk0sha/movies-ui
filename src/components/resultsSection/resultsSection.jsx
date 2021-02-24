import React, { useEffect, useState } from "react";
import { ResultsSectionHeader, ResultsSectionWrapper } from "components/resultsSection/resultsSection.styled";
import { Genres } from "components/resultsSection/genres";
import { MoviesSorting } from "components/resultsSection/moviesSorting";
import { getGenres } from "api";

const ResultsSection = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genresData = getGenres();
    setGenres(genresData);
  }, []);

  return (
    <ResultsSectionWrapper>
      <ResultsSectionHeader>
        <Genres genres={genres} />
        <MoviesSorting />
      </ResultsSectionHeader>
    </ResultsSectionWrapper>
  );
};

export { ResultsSection };
