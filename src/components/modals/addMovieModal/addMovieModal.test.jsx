import React from "react";
import { fireEvent, waitFor } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import { theme } from "assets/styles/theme";
import { MODAL_TYPES } from "consts";
import AddMovieModal from "components/modals/addMovieModal";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-datepicker/dist/react-datepicker.css", () => {});

describe("<AddMovieModal /> component testing", () => {
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

  it("should render a AddMovieModal component with initial state", () => {
    const store = mockStore(initialState);
    const { container } = render(<AddMovieModal />, { store, theme });

    expect(container).toMatchSnapshot();
  });

  it("should handle form submit", async () => {
    const store = mockStore(initialState);
    const onAddingSubmit = jest.fn();
    const { getByTestId } = render(<AddMovieModal onAddingSubmit={onAddingSubmit} />, {
      store,
      theme
    });
    const form = getByTestId("add-movie-modal-submit");

    fireEvent.submit(form);

    await waitFor(() => expect(onAddingSubmit).toHaveBeenCalled());
  });

  it("should handle form submit with empty searchValue", async () => {
    const initialStateWithEmptySearchValue = {
      ...initialState,
      app: {
        ...initialState.app,
        searchValue: ""
      }
    };
    const store = mockStore(initialStateWithEmptySearchValue);
    const onAddingSubmit = jest.fn();
    const { getByTestId } = render(<AddMovieModal onAddingSubmit={onAddingSubmit} />, {
      store,
      theme
    });
    const form = getByTestId("add-movie-modal-submit");

    fireEvent.submit(form);

    await waitFor(() => expect(onAddingSubmit).toHaveBeenCalled());
  });
});
