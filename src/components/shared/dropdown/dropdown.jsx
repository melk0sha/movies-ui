import React, { useCallback, useMemo, useRef, useState } from "react";
import { arrayOf, bool, number, shape, string } from "prop-types";
import { useOnClickOutside } from "hooks";
import { DropdownWrapper, DropdownHeader, DropdownList, ListItem } from "components/shared/dropdown/dropdown.styled";

const Dropdown = ({
  id,
  className = "",
  options = [],
  defaultLabel = "",
  selectedOption = {},
  onSelect,
  primary = false
}) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);

  useOnClickOutside(dropdownWrapperRef, () => setOpen(false));

  const handleHeaderClick = useCallback(() => setOpen((prevState) => !prevState), [setOpen]);

  const handleOptionChange = useCallback(
    (newOption) => {
      setOpen(false);
      onSelect(newOption);
    },
    [onSelect, setOpen]
  );

  const OptionItems = useMemo(
    () =>
      options?.map((option, index) => (
        <ListItem primary={primary} onClick={() => handleOptionChange(option)} key={option.id || index}>
          {option.value}
        </ListItem>
      )),
    [options, handleOptionChange]
  );

  return (
    <DropdownWrapper primary={primary} className={className} ref={dropdownWrapperRef} opened={isOpen}>
      <DropdownHeader
        id={id}
        primary={primary}
        isLabel={!!defaultLabel && !selectedOption.value}
        onClick={handleHeaderClick}
      >
        {selectedOption.value || defaultLabel}
      </DropdownHeader>
      {isOpen && !!options.length && <DropdownList primary={primary}>{OptionItems}</DropdownList>}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  id: string,
  className: string,
  options: arrayOf(
    shape({
      id: number,
      value: string
    })
  ),
  defaultLabel: string,
  primary: bool
};

export { Dropdown };
