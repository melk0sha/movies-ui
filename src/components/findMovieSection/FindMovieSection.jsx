import React from "react";
import { BUTTON_TYPE } from "consts";
import { FindMovieSectionWrapper } from "components/findMovieSection/findMovieSection.styled";
import { Input } from "components/shared/input";
import { Button } from "components/shared/button";

const FindMovieSection = () => {
  return (
    <FindMovieSectionWrapper>
      <Input />
      <Button primary size={BUTTON_TYPE.LARGE}>
        Search
      </Button>
    </FindMovieSectionWrapper>
  );
};

export { FindMovieSection };
