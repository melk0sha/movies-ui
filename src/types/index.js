import { arrayOf, number, oneOf, shape, string, date } from "prop-types";
import { SORT_BY_OPTIONS } from "consts";
import { getValueToSortBy } from "utils";

export const movieType = shape({
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: arrayOf(string),
  runtime: number
});

export const dropdownOptionType = shape({
  id: number,
  value: string
});

export const modalValuesAddType = shape({
  title: string,
  release_date: date,
  poster_path: string,
  genres: arrayOf(dropdownOptionType),
  overview: string,
  runtime: string
});

export const modalValuesEditType = shape({
  id: number,
  title: string,
  release_date: date,
  poster_path: string,
  genres: arrayOf(dropdownOptionType),
  overview: string,
  runtime: string
});

export const moviesSortByType = oneOf(SORT_BY_OPTIONS.map((option) => getValueToSortBy(option.value)));
