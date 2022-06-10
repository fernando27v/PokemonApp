import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ModifyPokemon from "./ModifyPokemon";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

test("renders ModifyPokemon component ", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <ModifyPokemon />
      </Provider>
    </BrowserRouter>
  );
  component.getByText("Modificar Pokemon");
});
