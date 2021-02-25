import styled from "styled-components";
import { baseColor_1, baseColor_2, baseColor_3 } from "assets/styles/colors";
import mainBackgroundImage from "assets/images/background.jpg";

export const FindMovieSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  margin-top: -70px;
  padding: 70px 10% 0;
  background-image: url(${mainBackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: ${baseColor_3};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

export const FindMovieTitle = styled.h1`
  text-shadow: ${baseColor_2} 1px 1px 0, ${baseColor_2} -1px 1px 0, ${baseColor_2} 1px -1px 0,
    ${baseColor_2} -1px -1px 0;
  margin: 0 10px 50px;
  color: ${baseColor_1};
  font-size: 3rem;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
