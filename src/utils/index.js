export const getUniqueGenres = (movies) =>
  movies?.reduce((moviesAcc, movie) => {
    const uniqueGenresWithIds = movie.genres.reduce(
      (genresAcc, genre) =>
        moviesAcc.findIndex((accValue) => accValue.value === genre) === -1
          ? [...genresAcc, { id: Math.random(), value: genre }]
          : genresAcc,
      []
    );

    return [...moviesAcc, ...uniqueGenresWithIds];
  }, []);

export const getYearFromReleaseDate = (releaseDate) => releaseDate?.slice(0, 4);
