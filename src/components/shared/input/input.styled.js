import styled from "styled-components";

export const StyledInput = styled.input`
  flex: 1 1 auto;
  max-width: 700px;
  margin: 0 10px;
  padding: 15px 30px;
  border: none;
  border-radius: ${({ rounded }) => (rounded ? "40px" : "3px")};
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.transparent.black_04 : theme.colors.brown.original};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.transparent.black_08 : theme.colors.brown.dark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
  }
`;
