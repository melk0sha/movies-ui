import styled from "styled-components";

export const StyledInput = styled.input`
  flex: 1 1 auto;
  max-width: 700px;
  margin: 0 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.transparent.black_04};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: ${({ theme }) => theme.colors.transparent.black_08};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
  }
`;
