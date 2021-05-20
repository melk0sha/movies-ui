import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "consts";
import { NotFoundWrapper, NotFoundTitle, NotFoundSpan } from "components/notFoundPage/notFoundPage.styled";

const notFoundPage = () => (
  <NotFoundWrapper>
    <NotFoundTitle>404</NotFoundTitle>
    <NotFoundSpan>The page you were looking for doesn't exist.</NotFoundSpan>
    <NotFoundSpan>
      We suggest you getting back to <Link to={PATHS.HOME}>Home page</Link>.
    </NotFoundSpan>
  </NotFoundWrapper>
);

export default notFoundPage;
