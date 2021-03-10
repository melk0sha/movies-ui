import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { genreType, movieType, modalValues } from "types";
import { Modal } from "components/shared/modal";
import { EditMovieModal } from "components/modals/editMovieModal";
import { DeleteMovieModal } from "components/modals/deleteMovieModal";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

class Movies extends Component {
  static defaultProps = {
    movies: [],
    genres: [],
    modalValues: {},
    defaultModalValues: {}
  };

  state = {
    isModalShown: {
      [MODAL_TYPES.EDIT_MOVIE]: false,
      [MODAL_TYPES.DELETE_MOVIE]: false
    }
  };

  handleModalShowingChange = (type) => {
    this.setState((prevState) => ({
      isModalShown: {
        ...prevState.isModalShown,
        [type]: !prevState.isModalShown[type]
      }
    }));
  };

  handleOptionClick = (movie, type) => {
    const { handleModalShowingChange } = this;
    const { modalValues, onModalValuesChange } = this.props;

    handleModalShowingChange(type);
    onModalValuesChange({ values: { ...modalValues[type], id: movie.id }, type });
  };

  handleMovieDelete = (movieId) => {
    const { handleModalShowingChange } = this;
    const { onMovieDelete } = this.props;

    onMovieDelete(movieId);
    handleModalShowingChange(MODAL_TYPES.DELETE_MOVIE);
  };

  handleModalValuesChange = (values) => {
    const { onModalValuesChange } = this.props;
    onModalValuesChange(values);
  };

  render() {
    const { handleModalShowingChange, handleOptionClick, handleMovieDelete, handleModalValuesChange } = this;
    const { genres, movies, modalValues, defaultModalValues } = this.props;
    const { isModalShown } = this.state;

    const MoviesCards = movies.map((movie, index) => (
      <Movie
        movie={movie}
        key={movie.id || index}
        onEditClick={(movie) => handleOptionClick(movie, MODAL_TYPES.EDIT_MOVIE)}
        onDeleteClick={(movie) => handleOptionClick(movie, MODAL_TYPES.DELETE_MOVIE)}
      />
    ));

    return (
      <MoviesWrapper>
        {MoviesCards}

        <Modal show={isModalShown.editMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.EDIT_MOVIE)}>
          <EditMovieModal
            values={modalValues.editMovie}
            defaultValues={defaultModalValues.editMovie}
            onValuesChange={handleModalValuesChange}
            genres={genres}
          />
        </Modal>

        <Modal show={isModalShown.deleteMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.DELETE_MOVIE)}>
          <DeleteMovieModal values={modalValues.deleteMovie} onDelete={handleMovieDelete} />
        </Modal>
      </MoviesWrapper>
    );
  }
}

Movies.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieDelete: func
};

export { Movies };
