import React, { useCallback, useMemo, useState } from "react";
import { arrayOf, func } from "prop-types";
import { BUTTON_SIZE, MODAL_TYPES } from "consts";
import { genreType, modalValuesAddType } from "types";
import { HeaderWrapper, LogoWrapper } from "components/header/header.styled";
import { Button } from "components/shared/button";
import { Modal } from "components/shared/modal";
import { AddMovieModal } from "components/modals/addMovieModal";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Header = ({ genres = [], modalValues = {}, defaultModalValues = {}, onModalValuesChange }) => {
  const [isModalShown, setModalShown] = useState(false);

  const genreOptions = useMemo(() => genres.map((genre) => ({ ...genre, value: genre.name })), [genres]);

  const handleModalShowingChange = useCallback(() => {
    setModalShown((prevState) => !prevState);
  }, [setModalShown]);

  const handleModalValuesChange = useCallback(
    (values) => {
      onModalValuesChange(values, MODAL_TYPES.ADD_MOVIE);
    },
    [onModalValuesChange]
  );

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logoImage} alt="Logo" />
      </LogoWrapper>

      <Button size={BUTTON_SIZE.sm} onClick={handleModalShowingChange}>
        + Add movie
      </Button>

      <Modal show={isModalShown} onClose={handleModalShowingChange}>
        <AddMovieModal
          values={modalValues}
          defaultValues={defaultModalValues}
          onValuesChange={handleModalValuesChange}
          genres={genreOptions}
        />
      </Modal>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  genres: arrayOf(genreType),
  modalValues: modalValuesAddType,
  defaultModalValues: modalValuesAddType,
  onModalValuesChange: func
};

export { Header };
