import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
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
  box-shadow: 0px 1px 5px 0px ${({ theme }) => theme.colors.transparent.black_08};
`;

export const LogoWrapper = styled.div`
  width: 55px;
  height: 40px;
  overflow: hidden;

  @media ${device.tablet} {
    width: auto;
  }
`;

export const StyledHashLink = styled(HashLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin: 0 10px;
  padding: 6px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 40px;
  white-space: nowrap;
  text-decoration: none;
  ${({ theme }) => theme.buttonColors.secondary}
  transition: background-color 0.2s ease-out;
  cursor: pointer;
`;
