import styled from "styled-components";
import DatePicker from "react-datepicker";

export const DatePickerComponent = styled(DatePicker)`
  flex: 1 1 auto;
  max-width: 700px;
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: ${({ rounded }) => (rounded ? "40px" : "3px")};
  background-color: ${({ theme }) => theme.colors.brown.original};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease-out;
  box-shadow: 0px 0px 3px -1px ${({ theme }) => theme.colors.transparent.black_08};

  &:focus {
    background-color: ${({ theme }) => theme.colors.brown.dark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
  }
`;
