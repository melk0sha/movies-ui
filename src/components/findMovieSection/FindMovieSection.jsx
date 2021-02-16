import React from "react";
import { FindMovieSectionWrapper } from "components/findMovieSection/findMovieSection.styled";
import { Input } from "components/shared/input";
import { Button } from "components/shared/button";

const FindMovieSection = () => {
  return (
    <FindMovieSectionWrapper>
      <Input />
      <Button primary>Search</Button>
    </FindMovieSectionWrapper>
  );
};

export { FindMovieSection };
