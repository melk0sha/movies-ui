import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "tests/helpers/render";
import { mockStore } from "tests/helpers/mockStore";
import MovieSection from "components/movieSection";
import { theme } from "assets/styles/theme";
import "@testing-library/jest-dom/extend-expect";

describe("<MovieSection /> component testing", () => {
  const initialState = {
    movies: {
      movieList: []
    },
    app: {
      searchValue: ""
    }
  };
  const initialStateWithMovie = {
    movies: {
      movieList: [
        {
          id: 123,
          title: "Movie",
          vote_average: 7,
          release_date: "01.01.2000",
          poster_path: "poster_path",
          overview: "overview",
          tagline: "tagline",
          genres: ["Genre"],
          runtime: 1
        }
      ]
    },
    app: {
      searchValue: "Movie"
    }
  };

  it("should render a MovieSection component with initial state", () => {
    const store = mockStore(initialState);
    const noMovieFoundText = "Sorry, but no movie was found.";
    const { container, getByText } = render(<MovieSection />, { theme, store });

    expect(getByText(noMovieFoundText)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should handle an incorrect image url and replace it with correct one", () => {
    const store = mockStore(initialStateWithMovie);
    const [{ id, title }] = initialStateWithMovie.movies.movieList;
    const { container, getByText, getByAltText } = render(<MovieSection movieId={String(id)} />, {
      theme,
      store
    });

    fireEvent.error(getByAltText(title));

    expect(getByText(title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
