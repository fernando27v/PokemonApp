import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";
import Pokemons from "./Pokemons";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );

test("renders Pokemons component", () => {
  const components = render(<Pokemons />);
    components.getByText("Nombre");
});
