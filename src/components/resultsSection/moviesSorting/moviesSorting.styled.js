import styled from "styled-components";
import { Dropdown } from "components/shared/dropdown";
import { baseColor_7 } from "assets/styles/colors";

export const MoviesSortingWrapper = styled.div`
  display: flex;
`;

export const SortingSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px;
  color: ${baseColor_7};
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const StyledDropdown = styled(Dropdown)`
  min-width: 157px;
`;