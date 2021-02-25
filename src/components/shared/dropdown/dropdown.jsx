import React, { useCallback, useMemo, useRef, useState } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { useOnClickOutside } from "hooks";
import { DropdownWrapper, DropdownHeader, DropdownList, ListItem } from "components/shared/dropdown/dropdown.styled";

const Dropdown = ({ className = "", options = [], defaultSelectedOption = null }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const dropdownWrapperRef = useRef(null);

  useOnClickOutside(dropdownWrapperRef, () => setOpen(false));

  const handleHeaderClick = useCallback(() => setOpen((prevState) => !prevState), [setOpen]);

  const handleOptionChange = useCallback(
    (newOption) => {
      setSelectedOption(newOption);
      setOpen(false);
    },
    [setSelectedOption, setOpen]
  );

  const OptionItems = useMemo(
    () =>
      options.map((option) => (
        <ListItem onClick={() => handleOptionChange(option)} key={option.id || Math.random()}>
          {option.value}
        </ListItem>
      )),
    [options, handleOptionChange]
  );

  return (
    <DropdownWrapper className={className} ref={dropdownWrapperRef} opened={isOpen}>
      <DropdownHeader onClick={handleHeaderClick}>{selectedOption.value}</DropdownHeader>
      {isOpen && options.length !== 0 && <DropdownList>{OptionItems}</DropdownList>}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  className: string,
  options: arrayOf(
    shape({
      id: number,
      value: string
    })
  ),
  defaultSelectedOption: shape({
    id: number,
    value: string
  })
};

export { Dropdown };
