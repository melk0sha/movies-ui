import React from "react";
import { BUTTON_SIZE } from "consts";
import { HeaderWrapper } from "components/shared/header/header.styled";
import { Button } from "components/shared/button";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoImage} alt="Logo" />
      <Button size={BUTTON_SIZE.sm}>+ Add movie</Button>
    </HeaderWrapper>
  );
};

export { Header };
