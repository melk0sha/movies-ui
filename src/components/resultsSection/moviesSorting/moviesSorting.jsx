import React, { useCallback, useMemo } from "react";
import { generatePath, useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { setMoviesSortBy, getMoviesByParams } from "actions";
import { SORT_BY_OPTIONS, PATHS } from "consts";
import { getValueToSortBy } from "utils";
import { moviesSortByType } from "types";
import {
  SortingSpan,
  MoviesSortingWrapper,
  StyledDropdown
} from "components/resultsSection/moviesSorting/moviesSorting.styled";

const MoviesSorting = ({ valueToSortBy, searchValue, activeGenre, onSortByChange, onNewMoviesUpdate }) => {
  const history = useHistory();
  const selectedOption = useMemo(
    () => SORT_BY_OPTIONS.find((option) => getValueToSortBy(option.value) === valueToSortBy),
    [valueToSortBy]
  );

  const handleOptionSelect = useCallback(
    (newOption) => {
      const [newSelectedOption] = newOption;
      const path = generatePath(PATHS.RESULTS, { value: searchValue });

      if (searchValue) {
        const sortBy = getValueToSortBy(newSelectedOption.value);

        onNewMoviesUpdate({ sortBy, search: searchValue, searchBy: "title", filter: activeGenre });
      }

      history.push(path);
      onSortByChange(newSelectedOption.value);
    },
    [searchValue, activeGenre]
  );

  return (
    <MoviesSortingWrapper>
      <SortingSpan>Sort By</SortingSpan>
      <StyledDropdown
        primary
        options={SORT_BY_OPTIONS}
        selectedOptions={[selectedOption]}
        onSelect={handleOptionSelect}
      />
    </MoviesSortingWrapper>
  );
};

MoviesSorting.propTypes = {
  valueToSortBy: moviesSortByType,
  searchValue: string,
  activeGenre: string,
  onSortByChange: func,
  onNewMoviesUpdate: func
};

const mapStateToProps = (state) => ({
  valueToSortBy: state.app.moviesSortBy,
  searchValue: state.app.searchValue,
  activeGenre: state.app.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onSortByChange: bindActionCreators(setMoviesSortBy, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSorting);
