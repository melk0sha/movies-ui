import React from "react";
import { render } from "tests/helpers/render";
import { theme } from "assets/styles/theme";
import Footer from "components/footer";
import "@testing-library/jest-dom/extend-expect";

describe("<Footer /> component testing", () => {
  it("should render a Footer component with initial state", () => {
    const { container, getByAltText } = render(<Footer />, { theme });

    expect(getByAltText("Logo")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
