import React from "react";
import { fireEvent, waitFor } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import { theme } from "assets/styles/theme";
import { MODAL_TYPES } from "consts";
import AddMovieModal from "components/modals/addMovieModal";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-datepicker/dist/react-datepicker.css", () => {});
// jest.mock("react-router-dom", () => ({
//   useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
//   generatePath: jest.fn().mockReturnValue("url")
// }));
// jest.mock("react-router-hash-link", () => ({ HashLink: jest.fn().mockReturnValue(<div></div>) }));
// jest.mock("components/shared/modal", () => jest.fn().mockReturnValue(<div></div>));

describe("<AddMovieModal /> component testing", () => {
  const initialState = {
    app: {
      moviesSortBy: "release_date",
      searchValue: "Movie",
      activeGenre: "All"
    },
    modals: {
      [MODAL_TYPES.ADD_MOVIE]: {}
    }
  };

  it("should render a AddMovieModal component with initial state", () => {
    const store = mockStore(initialState);
    const { container } = render(<AddMovieModal />, { store, theme });

    expect(container).toMatchSnapshot();
  });

  it("should handle form submit", () => {
    const store = mockStore(initialState);
    const { container, getByTestId } = render(<AddMovieModal />, { store, theme });

    fireEvent.submit(getByTestId("add-movie-modal-submit"));

    expect(container).toMatchSnapshot();
  });
});
