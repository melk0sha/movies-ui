import styled from "styled-components";
import { Input } from "components/shared/input";
import { Dropdown } from "components/shared/dropdown";

export const ModalForm = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const ModalInput = styled(Input)`
  height: 40px;
  padding: 10px 20px;
  font-size: 1rem;
`;

export const ModalField = styled.div`
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
