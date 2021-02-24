import React from "react";
import { HeaderWrapper } from "components/shared/header/header.styled";
import { Button } from "components/shared/button";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoImage} alt="Logo" />
      <Button>+ Add movie</Button>
    </HeaderWrapper>
  );
};

export { Header };
