import React, { useCallback, useMemo, useState } from "react";
import { arrayOf } from "prop-types";
import { BUTTON_SIZE } from "consts";
import { genreType } from "types";
import { HeaderWrapper, LogoWrapper } from "components/header/header.styled";
import { Button } from "components/shared/button";
import { Modal } from "components/shared/modal";
import { AddMovieModal } from "components/modals/addMovieModal";
import { newMovieValuesDefaultState } from "components/header/header.constants";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Header = ({ genres = [] }) => {
  const [isModalShown, setModalShown] = useState(false);
  const [newMovieValues, setNewMovieValues] = useState(newMovieValuesDefaultState);

  const genreOptions = useMemo(() => genres.map((genre) => ({ ...genre, value: genre.name })), [genres]);

  const handleModalShowingChange = useCallback(() => {
    setModalShown((prevState) => !prevState);
  }, [setModalShown]);

  const handleValuesChange = useCallback(
    (values) => {
      setNewMovieValues(values);
    },
    [setNewMovieValues]
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
          values={newMovieValues}
          defaultValues={newMovieValuesDefaultState}
          onValuesChange={handleValuesChange}
          genres={genreOptions}
        />
      </Modal>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  genres: arrayOf(genreType)
};

export { Header };
