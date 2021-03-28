import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func } from "prop-types";
import { setMoviesSortBy, getMoviesByParams } from "actions";
import { SORT_BY_OPTIONS } from "consts";
import { getValueToSortBy } from "utils";
import { moviesSortByType } from "types";
import {
  SortingSpan,
  MoviesSortingWrapper,
  StyledDropdown
} from "components/resultsSection/moviesSorting/moviesSorting.styled";

const MoviesSorting = ({ valueToSortBy, onSortByChange, onNewMoviesUpdate }) => {
  const selectedOption = useMemo(
    () => SORT_BY_OPTIONS.find((option) => getValueToSortBy(option.value) === valueToSortBy),
    [valueToSortBy]
  );

  const handleOptionSelect = useCallback((newOption) => {
    const [selectedOption] = newOption;
    const sortBy = getValueToSortBy(selectedOption.value);

    onSortByChange(selectedOption.value);
    onNewMoviesUpdate({ sortBy });
  }, []);

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
  onSortByChange: func,
  onNewMoviesUpdate: func
};

const mapStateToProps = (state) => ({
  valueToSortBy: state.app.moviesSortBy
});

const mapDispatchToProps = (dispatch) => ({
  onSortByChange: bindActionCreators(setMoviesSortBy, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSorting);
