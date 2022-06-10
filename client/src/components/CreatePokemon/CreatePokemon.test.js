import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";
import CreatePokemon from "./CreatePokemon";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const render = (component) => {
  const history = createMemoryHistory();
  history.push("/new");
  return rtlRender(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        {component}
      </Router>
    </Provider>
  );
};

test("renders CreatePokemon component ", () => {
  const component = render(<CreatePokemon />);
  component.getByText("Nuevo Pokemon");
});