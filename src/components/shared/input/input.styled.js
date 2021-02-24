import styled from "styled-components";
import { baseColor_1, transparentColor_1, transparentColor_2 } from "assets/styles/colors";

export const StyledInput = styled.input`
  flex: 1 1 auto;
  max-width: 700px;
  margin: 0 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: ${transparentColor_1};
  font-size: 20px;
  color: ${baseColor_1};
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: ${transparentColor_2};
  }

  &::placeholder {
    color: ${baseColor_1};
    opacity: 0.6;
  }
`;
