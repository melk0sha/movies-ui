import styled from "styled-components";
import { device } from "assets/styles/device";
import { Input } from "components/shared/input";
import mainBackgroundImage from "assets/images/background.jpg";

const getTextOutlineByColor = (color) =>
  `${color} 1px 1px 0, ${color} -1px 1px 0, ${color} 1px -1px 0, ${color} -1px -1px 0`;

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
  background-color: ${({ theme }) => theme.colors.vinous.original};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.transparent.black_05};
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

export const FindMovieTitle = styled.h1`
  margin: 0 10px 50px;
  text-shadow: ${({ theme }) => getTextOutlineByColor(theme.colors.black)};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  min-width: 300px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;
