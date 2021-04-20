import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { theme } from "assets/styles/theme";
import Dropdown from "components/shared/dropdown";
import "@testing-library/jest-dom/extend-expect";

describe("<Dropdown /> component testing", () => {
  const options = [{ id: 1, value: "Option 1" }, { value: "Option 2" }];

  it("should render a Dropdown component with initial state", () => {
    const { container } = render(<Dropdown />, { theme });

    expect(container).toMatchSnapshot();
  });

  it("should handle onSelect for singleSelect and primary option", () => {
    const handleSelect = jest.fn();
    const labelText = "Default label";
    const { container, getByText } = render(
      <Dropdown primary options={options} defaultLabel={labelText} onSelect={handleSelect} />,
      {
        theme
      }
    );
    const [firstOption] = options;

    const labelElement = getByText(labelText);

    fireEvent.click(labelElement);

    const optionElement = getByText(firstOption.value);

    fireEvent.click(optionElement);

    expect(container).toMatchSnapshot();
    expect(handleSelect).toHaveBeenCalled();
  });

  it("should handle onSelect for multiSelect and selected options", () => {
    const handleSelect = jest.fn();
    const selectedOptions = [...options];
    const [firstOption] = options;
    const labelTest = selectedOptions.map((option) => option.value).join(", ");
    const { container, getByText } = render(
      <Dropdown options={options} multiSelect selectedOptions={selectedOptions} onSelect={handleSelect} />,
      {
        theme
      }
    );

    const labelElement = getByText(labelTest);

    fireEvent.click(labelElement);

    const optionElement = getByText(firstOption.value);

    fireEvent.click(optionElement);

    expect(container).toMatchSnapshot();
    expect(handleSelect).toHaveBeenCalled();
  });

  it("should handle onSelect for multiSelect without selectedOptions", () => {
    const handleSelect = jest.fn();
    const [firstOption] = options;
    const labelTest = "Default label";
    const { container, getByText } = render(
      <Dropdown options={options} multiSelect defaultLabel={labelTest} onSelect={handleSelect} />,
      {
        theme
      }
    );

    const labelElement = getByText(labelTest);

    fireEvent.click(labelElement);

    const optionElement = getByText(firstOption.value);

    fireEvent.click(optionElement);

    expect(container).toMatchSnapshot();
    expect(handleSelect).toHaveBeenCalled();
  });
});
