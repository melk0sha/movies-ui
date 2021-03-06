import React, { Component } from "react";
import { arrayOf, func, number, shape, string } from "prop-types";
import { MODAL_TYPES } from "consts";
import { genreType, modalValues } from "types";
import { Modal } from "components/shared/modal";
import { editMovieValuesDefaultState } from "components/resultsSection/movies/movies.constants";
import { EditMovieModal } from "components/modals/editMovieModal";
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
    isModalShown: false
  };

  handleModalShowingChange = () => {
    this.setState((prevState) => ({ ...prevState, isModalShown: !prevState.isModalShown }));
  };

  handleEditModalValuesChange = (values) => {
    const { onModalValuesChange } = this.props;
    onModalValuesChange({ values, type: MODAL_TYPES.EDIT_MOVIE });
  };

  handleDeleteModalValuesChange = (values) => {
    const { onModalValuesChange } = this.props;
    onModalValuesChange({ values, type: MODAL_TYPES.DELETE_MOVIE });
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
    const {
      handleModalShowingChange,
      handleEditModalValuesChange,
      handleDeleteModalValuesChange,
      handleDeleteClick,
      handleEditClick
    } = this;
    const { genres, movies, modalValues, defaultModalValues } = this.props;
    const { isModalShown } = this.state;

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
            values={modalValues.editMovie}
            defaultValues={defaultModalValues.editMovie}
            onValuesChange={handleEditModalValuesChange}
            genres={genreOptions}
          />
        </Modal>

        {/* <Modal show={true} onClose={handleModalShowingChange}>
          <DeleteMovieModal
            values={modalValues.deleteMovie}
          />
        </Modal> */}
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
  genres: arrayOf(genreType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func
};

export { Movies };
