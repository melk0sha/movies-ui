import React, { useCallback, useMemo, useRef, useState } from "react";
import { arrayOf, bool, string } from "prop-types";
import { useOnClickOutside } from "hooks";
import { dropdownOptionType } from "types";
import { DropdownWrapper, DropdownHeader, DropdownList, ListItem } from "components/shared/dropdown/dropdown.styled";

const Dropdown = ({
  id,
  className,
  options = [],
  defaultLabel = "",
  selectedOptions = [],
  onSelect,
  primary = false,
  multiSelect = false
}) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);

  useOnClickOutside(dropdownWrapperRef, () => setOpen(false));

  const handleHeaderClick = useCallback(() => setOpen((prevState) => !prevState), [setOpen]);

  const handleOptionChange = useCallback(
    (newOption) => {
      // TODO: Refactor this part ---------
      let newOptions = [newOption];
      if (multiSelect) {
        const newOptionIndex = selectedOptions.findIndex((option) => option.id === newOption.id);

        if (newOptionIndex !== -1) {
          selectedOptions.splice(newOptionIndex, 1);
          newOptions = [...selectedOptions];
        } else {
          newOptions = [...selectedOptions, newOption];
        }
      }
      setOpen(false);
      onSelect(newOptions);
      // ---------
    },
    [onSelect, setOpen, multiSelect, selectedOptions]
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

  const selectedOptionsText = useMemo(() => selectedOptions.map((selectedOption) => selectedOption.value).join(", "), [
    selectedOptions
  ]);

  return (
    <DropdownWrapper
      id={id}
      primary={primary}
      className={className}
      ref={dropdownWrapperRef}
      opened={isOpen}
      onClick={(e) => e.preventDefault()}
    >
      <DropdownHeader primary={primary} isLabel={!!defaultLabel && !selectedOptionsText} onClick={handleHeaderClick}>
        {selectedOptionsText || defaultLabel}
      </DropdownHeader>
      {isOpen && !!options.length && <DropdownList primary={primary}>{OptionItems}</DropdownList>}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  id: string,
  className: string,
  options: arrayOf(dropdownOptionType),
  defaultLabel: string,
  selectedOptions: arrayOf(dropdownOptionType),
  primary: bool,
  multiSelect: bool
};

export default Dropdown;
