import { SORT_BY_VALUES } from "consts";

const getHashCodeFromString = (s) => s.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

export const getUniqueGenres = (movies) =>
  movies?.reduce((moviesAcc, movie) => {
    const uniqueGenresWithIds = movie.genres.reduce(
      (genresAcc, genre) =>
        moviesAcc.findIndex((accValue) => accValue.value === genre) === -1
          ? [...genresAcc, { id: getHashCodeFromString(genre), value: genre }]
          : genresAcc,
      []
    );

    return [...moviesAcc, ...uniqueGenresWithIds];
  }, []);

export const getYearFromReleaseDate = (releaseDate) => releaseDate?.slice(0, 4);

export const getValueToSortBy = (sortValue) => {
  switch (sortValue) {
    case SORT_BY_VALUES.RELEASE_DATE.value:
      return "release_date";
    case SORT_BY_VALUES.RATING.value:
      return "vote_average";
    default:
      return;
  }
};
