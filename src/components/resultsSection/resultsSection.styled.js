import styled from "styled-components";
import { baseColor_3, baseColor_5 } from "assets/styles/colors";

export const ResultsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${baseColor_3};
  padding-bottom: 50px;
`;

export const ResultsSectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 5px solid ${baseColor_5};
  margin: 20px 50px;
`;
