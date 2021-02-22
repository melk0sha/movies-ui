import React from "react";
import { BUTTON_TYPE } from "consts";
import { FindMovieSectionWrapper } from "components/findMovieSection/findMovieSection.styled";
import { Input } from "components/shared/input";
import { Button } from "components/shared/button";

const SEARCH_PLACEHOLDER_TEXT = "What do you want to watch?";

const FindMovieSection = () => {
  return (
    <FindMovieSectionWrapper>
      <Input placeholder={SEARCH_PLACEHOLDER_TEXT} />
      <Button primary size={BUTTON_TYPE.LARGE}>
        Search
      </Button>
    </FindMovieSectionWrapper>
  );
};

export { FindMovieSection };
