import React, { Component } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { genreType } from "types";
import { Modal } from "components/shared/modal";
import { editMovieValuesDefaultState } from "components/resultsSection/movies/movies.constants";
import { EditMovieModal } from "components/modals/editMovieModal";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

class Movies extends Component {
  static defaultProps = {
    movies: [],
    genres: []
  };

  state = {
    isModalShown: false,
    editMovieValues: editMovieValuesDefaultState
  };

  handleModalShowingChange = () => {
    this.setState((prevState) => ({ ...prevState, isModalShown: !prevState.isModalShown }));
  };

  handleValuesChange = (values) => {
    this.setState({ editMovieValues: values });
  };

  handleDeleteClick = (movie) => {
    const { handleModalShowingChange } = this;
    handleModalShowingChange();
    console.log(movie);
  };

  handleEditClick = (movie) => {
    const { handleModalShowingChange } = this;
    handleModalShowingChange();
    console.log(movie);
  };

  render() {
    const { handleModalShowingChange, handleValuesChange, handleDeleteClick, handleEditClick } = this;
    const { genres, movies } = this.props;
    const { isModalShown, editMovieValues } = this.state;

    const MoviesCards = movies.map((movie) => (
      <Movie
        movie={movie}
        key={movie.id || Math.random()}
        genres={genres}
        onDeleteClick={handleDeleteClick}
        onEditClick={handleEditClick}
      />
    ));

    const genreOptions = genres.map((genre) => ({ ...genre, value: genre.name }));

    return (
      <MoviesWrapper>
        {MoviesCards}

        {/* <Modal show={isModalShown} onClose={handleModalShowingChange}> */}
        <Modal show={true} onClose={handleModalShowingChange}>
          <EditMovieModal
            values={editMovieValues}
            defaultValues={editMovieValuesDefaultState}
            onValuesChange={handleValuesChange}
            genres={genreOptions}
          />
        </Modal>

        {/* Add modal with deletion */}
      </MoviesWrapper>
    );
  }
}

Movies.propTypes = {
  movies: arrayOf(
    shape({
      id: number,
      name: string,
      genreIds: arrayOf(number),
      year: string,
      image: string
    })
  ),
  genres: arrayOf(genreType)
};

export { Movies };
