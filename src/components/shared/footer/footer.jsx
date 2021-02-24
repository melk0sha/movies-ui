import React from "react";
import { FooterWrapper } from "components/shared/footer/footer.styled";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo src={logoImage} alt="Logo" />
    </FooterWrapper>
  );
};

export { Footer };
