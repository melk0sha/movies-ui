import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.vinous.dark};
`;
