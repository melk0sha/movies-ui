export const getUniqueGenres = (movies) =>
  movies?.reduce((moviesAcc, movie) => {
    const uniqueGenresWithIds = movie.genres.reduce(
      (genresAcc, genre, index) =>
        moviesAcc.findIndex((accValue) => accValue.value === genre) === -1
          ? [...genresAcc, { id: index, value: genre }]
          : genresAcc,
      []
    );

    return [...moviesAcc, ...uniqueGenresWithIds];
  }, []);
