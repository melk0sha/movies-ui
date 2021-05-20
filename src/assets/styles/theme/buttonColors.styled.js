import { css } from "styled-components";
import { colors } from "assets/styles/theme/colors";

export const buttonColors = {
  primary: css`
    background-color: ${colors.vinous.light};
    color: ${colors.orange.light};

    &:hover {
      background-color: ${colors.vinous.original};
    }

    &:active {
      background-color: ${colors.vinous.dark};
    }
  `,

  secondary: css`
    background-color: ${colors.beige.light};
    color: ${colors.transparent.black_09};

    &:hover {
      background-color: ${colors.beige.original};
    }

    &:active {
      background-color: ${colors.beige.dark};
    }
  `
};
