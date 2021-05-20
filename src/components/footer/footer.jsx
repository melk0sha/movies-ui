import React from "react";
import { FooterWrapper } from "components/footer/footer.styled";
import { Logo } from "assets/styles";
import logoImage from "assets/images/logo.png";

const Footer = () => (
  <FooterWrapper>
    <Logo src={logoImage} alt="Logo" />
  </FooterWrapper>
);

export default Footer;
