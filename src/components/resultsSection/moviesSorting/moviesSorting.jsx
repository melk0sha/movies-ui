import React, { useCallback, useState } from "react";
import { SORT_BY_OPTIONS, SORT_BY_VALUES } from "consts";
import {
  SortingSpan,
  MoviesSortingWrapper,
  StyledDropdown
} from "components/resultsSection/moviesSorting/moviesSorting.styled";

const MoviesSorting = () => {
  const [selectedOption, setSelectedOption] = useState([SORT_BY_VALUES.RELEASE_DATE]);

  const handleOptionSelect = useCallback(
    (newOption) => {
      setSelectedOption(newOption);
    },
    [setSelectedOption]
  );

  return (
    <MoviesSortingWrapper>
      <SortingSpan>Sort By</SortingSpan>
      <StyledDropdown
        primary
        options={SORT_BY_OPTIONS}
        selectedOptions={selectedOption}
        onSelect={handleOptionSelect}
      />
    </MoviesSortingWrapper>
  );
};

export default MoviesSorting;
