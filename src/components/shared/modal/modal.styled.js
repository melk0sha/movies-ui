import styled from "styled-components";
import { device } from "assets/styles/device";

export const ModalContainer = styled.div`
  position: fixed;
  display: ${({ show }) => (show ? "flex" : "none")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  display: ${({ show }) => (show ? "flex" : "none")};
  height: auto;
  max-width: 650px;
  margin: 20px;
  padding: 40px 20px;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.vinous.dark};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 1px 1000px ${({ theme }) => theme.colors.transparent.black_05};

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const ModalCloseIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 9px;
    content: "";
    height: 20px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
