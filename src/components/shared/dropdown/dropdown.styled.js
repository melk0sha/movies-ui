import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, opened, primary }) =>
    opened
      ? primary
        ? theme.colors.vinous.dark
        : theme.colors.brown.dark
      : primary
      ? theme.colors.vinous.original
      : theme.colors.brown.original};

  &:focus,
  &:hover {
    background-color: ${({ theme, primary }) => (primary ? theme.colors.vinous.dark : theme.colors.brown.dark)};
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  border-radius: ${({ primary }) => !primary && "3px"};
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ isLabel }) => isLabel && "0.6"};
  font-size: 1rem;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 2px solid ${({ theme, primary }) => (primary ? theme.colors.vinous.dark : theme.colors.brown.dark)};
  border-radius: ${({ primary }) => !primary && "3px"};
  z-index: 1;
`;

export const ListItem = styled.li`
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, primary }) => (primary ? theme.colors.vinous.original : theme.colors.brown.original)};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, primary }) => (primary ? theme.colors.vinous.dark : theme.colors.brown.dark)};
  }
`;
