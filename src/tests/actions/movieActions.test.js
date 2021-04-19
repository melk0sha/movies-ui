import axios from "axios";
import { mockStore } from "tests/helpers/mockStore";
import * as actions from "actions/modalsActions";
import * as types from "consts/actions";
import { ALL_GENRES_OPTION } from "consts";

jest.mock("axios");

describe("Movie Actions testing", () => {
  const initialState = {
    movies: {
      movieList: []
    }
  };

  it("should create an action to set successfully loaded movies", () => {
    const movies = [{ id: 1 }];
    const expectedAction = {
      type: types.REQUEST_MOVIES_SUCCESS,
      payload: movies
    };

    expect(actions.requestMoviesSuccess(movies)).toEqual(expectedAction);
  });

  it("should create an action to set error for movies request", () => {
    const error = "Error";
    const expectedAction = {
      type: types.REQUEST_MOVIES_ERROR,
      payload: error
    };

    expect(actions.requestMoviesError(error)).toEqual(expectedAction);
  });

  it("should create an action to clear error state", () => {
    const expectedAction = {
      type: types.CLEAR_REQUEST_RESULT
    };

    expect(actions.clearRequestResult()).toEqual(expectedAction);
  });

  it("should dispatch an async action to get movies data", async () => {
    const store = mockStore(initialState);
    const moviesData = [{ id: 1, title: "Movie" }];
    const resolvedData = { data: { data: moviesData } };
    const expectedActions = { type: types.REQUEST_MOVIES_SUCCESS, payload: moviesData };
    const params = { filter: ALL_GENRES_OPTION.value };

    axios.get.mockResolvedValueOnce(resolvedData);

    await store.dispatch(actions.getMoviesByParams(params));

    expect(axios.get).toHaveBeenCalled();
    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to fail getting movies data", async () => {
    const store = mockStore(initialState);
    const expectedActions = { type: types.REQUEST_MOVIES_ERROR };

    axios.get.mockRejectedValueOnce();

    await store.dispatch(actions.getMoviesByParams({}));

    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to add movies data", async () => {
    const store = mockStore(initialState);
    const params = { genres: [{ value: "Action" }] };

    axios.post.mockResolvedValueOnce();

    await store.dispatch(actions.addMovieByData(params));

    expect(axios.post).toHaveBeenCalled();
  });

  it("should dispatch an async action to fail getting movies data", async () => {
    const store = mockStore(initialState);
    const params = { genres: [{ value: "Action" }] };
    const expectedActions = { type: types.REQUEST_MOVIES_ERROR };

    axios.post.mockRejectedValueOnce();

    await store.dispatch(actions.addMovieByData(params));

    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to delete movie by id", async () => {
    const store = mockStore(initialState);
    const id = 1;

    axios.delete.mockResolvedValueOnce();

    await store.dispatch(actions.deleteMovieById(id));

    expect(axios.delete).toHaveBeenCalled();
  });

  it("should dispatch an async action to fail deletion movie by id", async () => {
    const store = mockStore(initialState);
    const expectedActions = { type: types.REQUEST_MOVIES_ERROR };
    const id = 1;

    axios.delete.mockRejectedValueOnce();

    await store.dispatch(actions.deleteMovieById(id));

    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to get movie by id", async () => {
    const store = mockStore(initialState);
    const movieData = { id: 1, title: "Movie" };
    const resolvedData = { data: movieData };
    const expectedActions = { type: types.REQUEST_MOVIES_SUCCESS, payload: [movieData] };
    const id = 1;

    axios.get.mockResolvedValueOnce(resolvedData);

    await store.dispatch(actions.getMovieById(id));

    expect(axios.get).toHaveBeenCalled();
    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to fail getting movie by id", async () => {
    const store = mockStore(initialState);
    const expectedActions = { type: types.REQUEST_MOVIES_ERROR };
    const id = 1;

    axios.get.mockRejectedValueOnce();

    await store.dispatch(actions.getMovieById(id));

    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });

  it("should dispatch an async action to update movie", async () => {
    const store = mockStore(initialState);
    const params = { genres: [{ value: "Action" }], runtime: null };

    axios.put.mockResolvedValueOnce();

    await store.dispatch(actions.updateMovieByData(params));

    expect(axios.put).toHaveBeenCalled();
  });

  it("should dispatch an async action to fail updating movie", async () => {
    const store = mockStore(initialState);
    const expectedActions = { type: types.REQUEST_MOVIES_ERROR };
    const params = { genres: [{ value: "Action" }] };

    axios.put.mockRejectedValueOnce();

    await store.dispatch(actions.updateMovieByData(params));

    expect(store.getActions()).toEqual(expect.arrayContaining([expectedActions]));
  });
});
