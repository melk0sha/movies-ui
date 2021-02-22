import styled from "styled-components";
import { baseColor_3 } from "assets/styles/colors";
import mainBackgroundImage from "assets/images/background.jpg";

export const FindMovieSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  margin-top: -70px;
  padding: 70px 200px 0;
  background-image: url(${mainBackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: ${baseColor_3};
`;
