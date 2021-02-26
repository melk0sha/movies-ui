import styled from "styled-components";
import { device } from "assets/styles/device";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.transparent.black_04};
  z-index: 2;
`;

export const LogoWrapper = styled.div`
  width: 55px;
  height: 40px;
  overflow: hidden;

  @media ${device.tablet} {
    width: auto;
  }
`;
