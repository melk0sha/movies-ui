import * as utils from "utils";
import { SORT_BY_VALUES } from "consts";

describe("Utilities testing", () => {
  it("getGenreId: should get genre id", () => {
    const genreValue = "Adventure";
    const genreId = utils.getGenreId(genreValue);

    expect(genreId).toEqual(1333);
  });

  it("getYearFromReleaseDate: should get year from release date", () => {
    const releaseDate = "2000.01.01";
    const year = utils.getYearFromReleaseDate(releaseDate);

    expect(year).toEqual("2000");
  });

  it("getValueToSortBy: should get value to sort by ('vote_average')", () => {
    const sortBy = utils.getValueToSortBy(SORT_BY_VALUES.RATING.value);

    expect(sortBy).toEqual("vote_average");
  });

  it("getValueToSortBy: should get value to sort by ('release_date')", () => {
    const sortBy = utils.getValueToSortBy(SORT_BY_VALUES.RELEASE_DATE.value);

    expect(sortBy).toEqual("release_date");
  });
});
