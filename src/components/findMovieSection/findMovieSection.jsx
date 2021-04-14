import React, { useCallback, useEffect } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { PATHS, BUTTON_SIZE, SEARCH_PLACEHOLDER_TEXT } from "consts";
import { getMoviesByParams, changeSearchValue } from "actions";
import { moviesSortByType } from "types";
import Button from "components/shared/button";
import {
  FindMovieSectionWrapper,
  FindMovieTitle,
  SearchForm,
  StyledInput
} from "components/findMovieSection/findMovieSection.styled";

const FindMovieSection = ({ moviesSortBy, searchValue, activeGenre, onMoviesByParamsGet, onSearchValueChange }) => {
  const history = useHistory();
  const { value: searchValueFromURL } = useParams();

  useEffect(() => {
    if (searchValueFromURL) {
      const params = {
        search: searchValueFromURL,
        sortBy: moviesSortBy,
        searchBy: "title",
        filter: activeGenre
      };

      onSearchValueChange(searchValueFromURL);
      onMoviesByParamsGet(params);
    }
  }, [searchValueFromURL, activeGenre]);

  useEffect(() => {
    if (searchValue) {
      const path = generatePath(PATHS.RESULTS, { value: searchValue });
      history.push(path);
    }
  }, []);

  const handleInputSearchChange = useCallback(({ target }) => {
    onSearchValueChange(target.value);
  });

  const handleSearchFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const params = {
        search: searchValue,
        sortBy: moviesSortBy,
        searchBy: "title",
        filter: activeGenre
      };
      const path = generatePath(PATHS.RESULTS, { value: searchValue });

      history.push(path);
      onMoviesByParamsGet(params);
    },
    [searchValue, moviesSortBy, activeGenre]
  );

  return (
    <FindMovieSectionWrapper>
      <FindMovieTitle>Find your movie</FindMovieTitle>

      <SearchForm onSubmit={handleSearchFormSubmit}>
        <StyledInput
          primary
          rounded
          value={searchValue}
          onChange={handleInputSearchChange}
          placeholder={SEARCH_PLACEHOLDER_TEXT}
        />
        <Button primary rounded size={BUTTON_SIZE.lg}>
          Search
        </Button>
      </SearchForm>
    </FindMovieSectionWrapper>
  );
};

FindMovieSection.propTypes = {
  moviesSortBy: moviesSortByType,
  searchValue: string,
  activeGenre: string,
  onMoviesByParamsGet: func,
  onSearchValueChange: func
};

const mapStateToProps = (state) => ({
  moviesSortBy: state.app.moviesSortBy,
  searchValue: state.app.searchValue,
  activeGenre: state.app.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onMoviesByParamsGet: bindActionCreators(getMoviesByParams, dispatch),
  onSearchValueChange: bindActionCreators(changeSearchValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FindMovieSection);
