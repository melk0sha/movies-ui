import React, { useCallback, useMemo, useRef, useState } from "react";
import { arrayOf, func, number, shape, string } from "prop-types";
import { useOnClickOutside } from "hooks";
import {
  ActionMenuWrapper,
  ActionMenuCircleWrapper,
  ActionMenuCircle,
  ActionMenuOptions,
  ActionMenuOption,
  Close
} from "components/shared/actionMenu/actionMenu.styled";

const ActionMenu = ({ className = "", options = [], onOptionClick }) => {
  const [isCircleHidden, setCircleHidden] = useState(false);
  const actionMenuWrapperRef = useRef(null);

  useOnClickOutside(actionMenuWrapperRef, () => setCircleHidden(false));

  const handleActionMenuClick = useCallback(() => {
    setCircleHidden((prevState) => !prevState);
  }, [setCircleHidden]);

  const Options = useMemo(
    () =>
      options.map((option) => (
        <ActionMenuOption key={option.id || Math.random()} onClick={() => onOptionClick(option)}>
          {option.value}
        </ActionMenuOption>
      )),
    [options]
  );

  return (
    <ActionMenuWrapper className={className} ref={actionMenuWrapperRef}>
      <ActionMenuCircleWrapper onClick={handleActionMenuClick} hidden={isCircleHidden}>
        <ActionMenuCircle />
        <ActionMenuCircle />
        <ActionMenuCircle />
      </ActionMenuCircleWrapper>
      <ActionMenuOptions hidden={!isCircleHidden}>
        {Options}
        <Close onClick={handleActionMenuClick} />
      </ActionMenuOptions>
    </ActionMenuWrapper>
  );
};

ActionMenu.propTypes = {
  className: string,
  options: arrayOf(
    shape({
      id: number,
      value: string,
      handler: func
    })
  )
};

export { ActionMenu };
