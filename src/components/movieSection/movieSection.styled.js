import styled from "styled-components";
import mainBackgroundImage from "assets/images/background.jpg";

export const MovieSectionWrapper = styled.div`
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
