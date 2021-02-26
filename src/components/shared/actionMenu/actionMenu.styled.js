import styled from "styled-components";

export const ActionMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionMenuCircleWrapper = styled.div`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.transparent.white_08};
  cursor: pointer;
`;

export const ActionMenuCircle = styled.div`
  width: 5px;
  height: 5px;
  margin: 1px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey.dark};
`;

export const ActionMenuOptions = styled.ul`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 50px;
  padding-top: 30px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grey.dark};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ActionMenuOption = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 6px 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.beige.original};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.beige.dark};
  }
`;

export const Close = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 6px;
    content: "";
    height: 15px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
