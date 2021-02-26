import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ opened, theme }) => opened && theme.colors.vinous.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.vinous.dark};
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 50px;
  border: 2px solid ${({ theme }) => theme.colors.vinous.dark};
  z-index: 1;
`;

export const ListItem = styled.li`
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.vinous.original};
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.vinous.dark};
  }
`;
