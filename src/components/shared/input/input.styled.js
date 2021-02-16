import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 20px;
  transition: background 0.2s ease-out;

  &:focus {
    background: rgba(0, 0, 0, 0.8);
  }
`;
