import styled from "styled-components";
import { Input } from "components/shared/input";
import { Dropdown } from "components/shared/dropdown";
import { device } from "assets/styles/device";

export const EditMovieModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin: 0 20px 30px;
  font-size: 2.4rem;
  text-transform: uppercase;

  @media ${device.tablet} {
    margin: 10px 10px 30px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const ModalLabel = styled.label`
  padding: 15px 10px 10px;
  font-size: 1.1rem;
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
  border-radius: 5px;

  div {
    justify-content: flex-start;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const ModalSpan = styled.span`
  margin: 0 10px 10px;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
