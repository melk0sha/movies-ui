import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import { theme } from "assets/styles/theme";
import { MODAL_TYPES } from "consts";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-datepicker/dist/react-datepicker.css", () => {});

describe("<UpdateMovieFields /> component testing", () => {
  const initialState = {
    app: {
      moviesSortBy: "release_date",
      searchValue: "Movie",
      activeGenre: "All"
    },
    modals: {
      [MODAL_TYPES.ADD_MOVIE]: {
        title: "Title",
        release_date: new Date("01-01-2000"),
        poster_path: "https://www.google.com/",
        genres: [{ id: 1332, value: "Action" }],
        overview: "Overview",
        runtime: "1"
      }
    }
  };

  it("should render a UpdateMovieFields component with initial state", () => {
    const store = mockStore(initialState);
    const { container } = render(<UpdateMovieFields type={MODAL_TYPES.ADD_MOVIE} />, { store, theme });

    expect(container).toMatchSnapshot();
  });

  it("should handle reset button click", async () => {
    const store = mockStore(initialState);
    const { container, getByRole } = render(<UpdateMovieFields type={MODAL_TYPES.ADD_MOVIE} />, {
      store,
      theme
    });
    const resetButton = getByRole("button", { name: /reset/i });

    fireEvent.click(resetButton);

    expect(container).toMatchSnapshot();
  });
});
