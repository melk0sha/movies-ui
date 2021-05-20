import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import { theme } from "assets/styles/theme";
import Header from "components/header";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-datepicker/dist/react-datepicker.css", () => {});
jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
  generatePath: jest.fn().mockReturnValue("url")
}));
jest.mock("react-router-hash-link", () => ({ HashLink: jest.fn().mockReturnValue(<div></div>) }));
jest.mock("components/shared/modal", () => jest.fn().mockReturnValue(<div></div>));

describe("<Header /> component testing", () => {
  const initialState = {
    movies: {
      movieList: [{ id: 1, title: "Movie" }]
    },
    app: {
      searchValue: ""
    }
  };

  it("should render a Header component with initial state", () => {
    const store = mockStore(initialState);
    const { container } = render(<Header />, { store, theme });

    expect(container).toMatchSnapshot();
  });

  it("should click on button and change modal showing state", () => {
    const store = mockStore(initialState);
    const { container, getByTestId } = render(<Header />, { store, theme });

    fireEvent.click(getByTestId("add-movie-btn"));

    expect(container).toMatchSnapshot();
  });
});
