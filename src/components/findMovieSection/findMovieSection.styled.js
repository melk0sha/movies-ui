import styled from "styled-components";
import mainBackgroundImage from "assets/images/background.jpg";

export const FindMovieSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  margin-top: -70px;
  padding-top: 70px;
  background-image: url(${mainBackgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #bf723b;
`;
