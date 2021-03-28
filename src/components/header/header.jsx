import React, { useCallback, useState } from "react";
import { generatePath, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { BUTTON_SIZE, PATHS } from "consts";
import Button from "components/shared/button";
import Modal from "components/shared/modal";
import AddMovieModal from "components/modals/addMovieModal";
import { Logo } from "assets/styles";
import { HeaderWrapper, LogoWrapper, StyledHashLink } from "components/header/header.styled";
import logoImage from "assets/images/logo.png";

const Header = () => {
  const { pathname } = useLocation();
  const [isModalShown, setModalShown] = useState(false);

  const handleModalShowingChange = useCallback(() => {
    setModalShown((prevState) => !prevState);
  }, [setModalShown]);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HashLink smooth to={generatePath(`${PATHS.HOME}#`)}>
          <Logo src={logoImage} alt="Logo" />
        </HashLink>
      </LogoWrapper>

      {pathname === PATHS.HOME ? (
        <Button rounded size={BUTTON_SIZE.sm} onClick={handleModalShowingChange}>
          Add movie
        </Button>
      ) : (
        <StyledHashLink smooth to={generatePath(`${PATHS.HOME}#`)}>
          Back to movie search
        </StyledHashLink>
      )}

      <Modal show={isModalShown} onClose={handleModalShowingChange}>
        <AddMovieModal onAddingSubmit={handleModalShowingChange} />
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
