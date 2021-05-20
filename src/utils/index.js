import { SORT_BY_VALUES } from "consts";
import { genres } from "consts/genres";

export const getGenreId = (genreValue) => genres.find((genre) => genre.value === genreValue)?.id || Math.random();

export const getYearFromReleaseDate = (releaseDate) => releaseDate?.slice(0, 4);

export const getValueToSortBy = (sortValue) => {
  switch (sortValue) {
    case SORT_BY_VALUES.RATING.value:
      return "vote_average";
    case SORT_BY_VALUES.RELEASE_DATE.value:
    default:
      return "release_date";
  }
};
