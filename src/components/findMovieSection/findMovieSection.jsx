import React, { useCallback, useState } from "react";
import { BUTTON_SIZE, SEARCH_PLACEHOLDER_TEXT } from "consts";
import { Input } from "components/shared/input";
import { Button } from "components/shared/button";
import {
  FindMovieSectionWrapper,
  FindMovieTitle,
  SearchForm
} from "components/findMovieSection/findMovieSection.styled";

const FindMovieSection = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const handleInputSearchChange = useCallback(
    ({ target }) => {
      setInputSearchValue(target.value);
    },
    [setInputSearchValue]
  );

  const handleSearchFormSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <FindMovieSectionWrapper>
      <FindMovieTitle>Find your movie</FindMovieTitle>
      <SearchForm onSubmit={handleSearchFormSubmit}>
        <Input value={inputSearchValue} onChange={handleInputSearchChange} placeholder={SEARCH_PLACEHOLDER_TEXT} />
        <Button primary size={BUTTON_SIZE.lg}>
          Search
        </Button>
      </SearchForm>
    </FindMovieSectionWrapper>
  );
};

export { FindMovieSection };
