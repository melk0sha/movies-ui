import { css } from "styled-components";
import { colors } from "assets/styles/theme/colors";

export const buttonColors = {
  primary: css`
    background-color: ${colors.black};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.vinous.original};
    }

    &:active {
      background-color: ${colors.vinous.dark};
    }
  `,

  secondary: css`
    background-color: ${colors.white};
    color: ${colors.black};

    &:hover {
      background-color: ${colors.beige.original};
    }

    &:active {
      background-color: ${colors.beige.dark};
    }
  `
};
