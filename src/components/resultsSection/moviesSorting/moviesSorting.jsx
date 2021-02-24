import React from "react";
import { SortingSpan, MoviesSortingWrapper } from "components/resultsSection/moviesSorting/moviesSorting.styled";
import { SORT_BY_OPTIONS, SORT_BY_VALUES } from "consts";
import { Dropdown } from "components/shared/dropdown";

const MoviesSorting = () => {
  return (
    <MoviesSortingWrapper>
      <SortingSpan>Sort By</SortingSpan>
      <Dropdown options={SORT_BY_OPTIONS} defaultSelectedOption={SORT_BY_VALUES.RELEASE_DATE} />
    </MoviesSortingWrapper>
  );
};

export { MoviesSorting };
