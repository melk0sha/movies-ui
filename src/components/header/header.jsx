import React, { useCallback, useState } from "react";
import { BUTTON_SIZE } from "consts";
import { HeaderWrapper, LogoWrapper } from "components/header/header.styled";
import { Button } from "components/shared/button";
import { Modal } from "components/shared/modal";
import { AddMovieModal } from "components/addMovieModal/addMovieModal";
import { newMovieValuesDefaultState } from "components/header/header.constants";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Header = () => {
  const [isModalShown, setModalShown] = useState(false);
  const [newMovieValues, setNewMovieValues] = useState(newMovieValuesDefaultState);

  const handleModalShowingChange = useCallback(() => {
    setModalShown((prevState) => !prevState);
  }, [setModalShown]);

  const handleValueChange = useCallback(
    (value) => {
      setNewMovieValues(value);
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

      {/* <Modal show={isModalShown} onClose={handleModalShowingChange}> */}
      <Modal show={true} onClose={handleModalShowingChange}>
        <AddMovieModal values={newMovieValues} onValueChange={handleValueChange} />
      </Modal>
    </HeaderWrapper>
  );
};

export { Header };
