import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "reducers";
import { ThemeProvider } from "styled-components";

const render = (ui, { initialState, theme, store = createStore(rootReducer, initialState), ...renderOptions } = {}) => {
  const wrapper = ({ children }) => (
    <Provider store={store}>{theme ? <ThemeProvider theme={theme}>{children}</ThemeProvider> : { children }}</Provider>
  );

  return rtlRender(ui, { wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
