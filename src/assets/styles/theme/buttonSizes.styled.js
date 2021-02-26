import { css } from "styled-components";
import { BUTTON_SIZE } from "consts";

export const buttonSizes = {
  [BUTTON_SIZE.xs]: css`
    height: 30px;
    padding: 6px 15px;
    font-size: 0.8rem;
  `,
  [BUTTON_SIZE.sm]: css`
    height: 36px;
    padding: 6px 18px;
    font-size: 1rem;
  `,
  [BUTTON_SIZE.md]: css`
    height: 42px;
    padding: 6px 21px;
    font-size: 1.1rem;
  `,
  [BUTTON_SIZE.lg]: css`
    height: 50px;
    padding: 12px 25px;
    font-size: 1.2rem;
  `
};
