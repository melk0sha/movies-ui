import styled from "styled-components";
import Input from "components/shared/input";
import Dropdown from "components/shared/dropdown";

export const ModalForm = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  .react-datepicker__input-container {
    padding: 0 20px 0 0;
  }
`;

export const ModalInput = styled(Input)`
  height: 40px;
  padding: 10px 20px;
  font-size: 1rem;
`;

export const ModalField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
`;

export const ModalDropdown = styled(Dropdown)`
  height: 40px;
  margin: 0 10px;
  border-radius: 3px;

  div {
    justify-content: flex-start;
  }
`;

export const ModalFieldError = styled.span`
  position: absolute;
  bottom: -17px;
  right: 15px;
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.red};
`;
