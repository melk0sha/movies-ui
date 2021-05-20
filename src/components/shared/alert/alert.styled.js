import styled from "styled-components";

export const AlertContainer = styled.div`
  position: fixed;
  display: ${({ show }) => (show ? "flex" : "none")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.vinous.dark};
`;

export const AlertText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  margin-bottom: 20px;
`;
