import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";
import Pokemon from "./Pokemon";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );

test("renders Pokemon component and his props", () => {
  const pokemon = {
    name: "Bulbasur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    attack: 70,
    defense: 70,
    idAuthor: 1,
    type: "fire",
    hp: 100,
  };

 const component = render(<Pokemon pokemon={pokemon}/>);
  component.getByText("Bulbasur");
});
