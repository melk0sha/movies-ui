import { number, shape, string } from "prop-types";

export const genreType = shape({
  id: number,
  name: string
});
