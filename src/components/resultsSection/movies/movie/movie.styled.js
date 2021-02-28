import styled from "styled-components";
import { ActionMenu } from "components/shared/actionMenu";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 25px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.vinous.dark};
  }
`;

export const MovieImageWrapper = styled.div`
  position: relative;
`;

export const MovieImage = styled.img`
  height: 320px;
  border-radius: 5px;
  cursor: pointer;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const MovieTitle = styled.h3`
  max-width: 165px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const MovieYear = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey.light};
`;

export const MovieGenres = styled.span`
  max-width: 200px;
  margin-top: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey.light};
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const StyledActionMenu = styled(ActionMenu)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
