import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  display: ${({ show }) => (show ? "flex" : "none")};
  height: auto;
  max-width: 560px;
  margin: auto;
  padding: 50px;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.vinous.dark};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.transparent.black_05};
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
