import React from "react";
import { ActionMenuWrapper, ActionMenuCircle } from "components/shared/actionMenu/actionMenu.styled";

const ActionMenu = ({ className = "" }) => {
  return (
    <ActionMenuWrapper className={className}>
      <ActionMenuCircle />
      <ActionMenuCircle />
      <ActionMenuCircle />
    </ActionMenuWrapper>
  );
};

export { ActionMenu };
