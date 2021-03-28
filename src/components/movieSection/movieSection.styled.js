import styled from "styled-components";
import { device } from "assets/styles/device";
import mainBackgroundImage from "assets/images/background.jpg";

export const MovieSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

  @media ${device.tablet} {
    flex-direction: row;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.transparent.black_09};
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

export const MovieImage = styled.img`
  height: 320px;
  margin-top: 50px;
  border-radius: 3px;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const MovieInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    margin: 50px 0 50px 40px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 2rem;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.orange.original};
  text-align: center;

  @media ${device.tablet} {
    text-align: start;
  }

  @media ${device.laptop} {
    font-size: 2.7rem;
  }
`;

export const MovieRating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  height: 50px;
  width: 50px;
  margin: -120px 0 60px 140px;
  border: 1px solid ${({ theme }) => theme.colors.orange.original};
  border-radius: 50%;
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.black};

  @media ${device.tablet} {
    margin: 0 20px;
    background-color: transparent;
  }
`;

export const MovieSpan = styled.span`
  padding: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media ${device.tablet} {
    text-align: start;
  }
`;

export const MovieGenres = styled.span`
  padding: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.orange.original};
  padding-top: 25px;
  text-align: center;
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    text-align: start;
  }
`;
