import React, { useCallback, useMemo, useState } from "react";
import { generatePath, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { bindActionCreators } from "redux";
import { changeSearchValue } from "actions";
import { BUTTON_SIZE, PATHS } from "consts";
import Button from "components/shared/button";
import Modal from "components/shared/modal";
import AddMovieModal from "components/modals/addMovieModal";
import { Logo } from "assets/styles";
import { HeaderWrapper, LogoWrapper, StyledHashLink } from "components/header/header.styled";
import logoImage from "assets/images/logo.png";

const [RESULTS_PATH] = PATHS.RESULTS.split(":");

const Header = ({ searchValue, onSearchValueChange }) => {
  const { pathname } = useLocation();
  const [isModalShown, setModalShown] = useState(false);

  const handleModalShowingChange = useCallback(() => {
    setModalShown((prevState) => !prevState);
  }, [setModalShown]);

  const linkTo = useMemo(() => {
    const path = `${searchValue ? PATHS.RESULTS : PATHS.HOME}#`;

    return generatePath(path, { value: searchValue });
  }, [searchValue]);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HashLink smooth to={linkTo}>
          <Logo src={logoImage} alt="Logo" />
        </HashLink>
      </LogoWrapper>

      {pathname === PATHS.HOME || pathname.includes(RESULTS_PATH) ? (
        <Button rounded size={BUTTON_SIZE.sm} onClick={handleModalShowingChange}>
          Add movie
        </Button>
      ) : (
        <StyledHashLink smooth to={linkTo}>
          Back to movie search
        </StyledHashLink>
      )}

      <Modal show={isModalShown} onClose={handleModalShowingChange}>
        <AddMovieModal onAddingSubmit={handleModalShowingChange} />
      </Modal>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  searchValue: string,
  onSearchValueChange: func
};

const mapStateToProps = (state) => ({
  searchValue: state.app.searchValue
});

const mapDispatchToProps = (dispatch) => ({
  onSearchValueChange: bindActionCreators(changeSearchValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
