import React from "react";
import { BUTTON_TYPE, SEARCH_PLACEHOLDER_TEXT } from "consts";
import { Input } from "components/shared/input";
import { Button } from "components/shared/button";
import {
  FindMovieSectionWrapper,
  FindMovieTitle,
  SearchWrapper
} from "components/findMovieSection/findMovieSection.styled";

const FindMovieSection = () => {
  return (
    <FindMovieSectionWrapper>
      <FindMovieTitle>Find your movie</FindMovieTitle>
      <SearchWrapper>
        <Input placeholder={SEARCH_PLACEHOLDER_TEXT} />
        <Button primary size={BUTTON_TYPE.LARGE}>
          Search
        </Button>
      </SearchWrapper>
    </FindMovieSectionWrapper>
  );
};

export { FindMovieSection };
