import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import FindMovieSection from "components/findMovieSection";
import { theme } from "assets/styles/theme";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ value: "Movie" }),
  useHistory: jest.fn().mockReturnValue({ push: () => {} }),
  generatePath: jest.fn().mockReturnValue("url")
}));

describe("<FindMovieSection /> component testing", () => {
  const initialState = {
    app: {
      searchValue: ""
    }
  };
  const initialStateWithSearchValue = {
    app: {
      searchValue: "Movie"
    }
  };

  it("should render a FindMovieSection component with initial state", () => {
    const store = mockStore(initialState);
    const textOnThePage = "Find your movie";
    const { container, getByText } = render(<FindMovieSection />, { theme, store });

    expect(getByText(textOnThePage)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should submit a form with empty searchValue and make a snapshot", () => {
    const store = mockStore(initialState);
    const { container, getByTestId } = render(<FindMovieSection />, {
      theme,
      store
    });

    fireEvent.submit(getByTestId("find-movie-form"));

    expect(container).toMatchSnapshot();
  });

  it("should submit a form with searchValue and make a snapshot", () => {
    const store = mockStore(initialStateWithSearchValue);
    const { container, getByTestId } = render(<FindMovieSection />, {
      theme,
      store
    });

    fireEvent.submit(getByTestId("find-movie-form"));

    expect(container).toMatchSnapshot();
  });

  it("should handle a change input event", () => {
    const store = mockStore(initialStateWithSearchValue);
    const { container, getByTestId } = render(<FindMovieSection />, {
      theme,
      store
    });
    const input = getByTestId("find-movie-input");

    fireEvent.change(input, { target: { value: "New Movie" } });

    expect(container).toMatchSnapshot();
  });
});
