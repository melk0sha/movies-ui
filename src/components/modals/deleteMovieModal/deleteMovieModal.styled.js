import styled from "styled-components";

export const DeleteMovieModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2.4rem;
  text-transform: uppercase;
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
