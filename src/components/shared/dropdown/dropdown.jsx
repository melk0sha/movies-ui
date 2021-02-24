import React, { useCallback, useMemo, useRef, useState } from "react";
import { arrayOf, shape, string } from "prop-types";
import { useOnClickOutside } from "hooks";
import { DropdownWrapper, DropdownHeader, DropdownList, ListItem } from "components/shared/dropdown/dropdown.styled";

const Dropdown = ({ options, defaultSelectedOption }) => {
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
    <DropdownWrapper ref={dropdownWrapperRef}>
      <DropdownHeader onClick={handleHeaderClick}>{selectedOption.value}</DropdownHeader>
      {isOpen && options.length !== 0 && <DropdownList>{OptionItems}</DropdownList>}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  options: arrayOf(
    shape({
      id: string,
      value: string
    })
  ),
  defaultSelectedOption: shape({
    id: string,
    value: string
  })
};

Dropdown.defaultProps = {
  options: [],
  defaultSelectedOption: null
};

export { Dropdown };
