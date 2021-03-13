import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { MovieSectionWrapper } from "components/movieSection/movieSection.styled";

const MovieSection = () => {
  const match = useRouteMatch("/movie/:id"); // match ??
  useEffect(() => console.log(match.params.id), [match]);

  return <MovieSectionWrapper>hi</MovieSectionWrapper>;
};

export { MovieSection };
