import styled from "styled-components";
import { Dropdown } from "components/shared/dropdown";

export const MoviesSortingWrapper = styled.div`
  position: relative;
  top: 1px;
  display: flex;
`;

export const SortingSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.grey.original};
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const StyledDropdown = styled(Dropdown)`
  min-width: 157px;
`;
