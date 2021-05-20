import styled from "styled-components";
import { device } from "assets/styles/device";

export const ModalMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalLabel = styled.label`
  padding: 15px 10px 10px;
  font-size: 1.1rem;
`;

export const ModalTitle = styled.h2`
  margin: 0 20px 30px;
  font-size: 2.4rem;
  text-transform: uppercase;

  @media ${device.tablet} {
    margin: 10px 10px 30px;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const ModalSpan = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
