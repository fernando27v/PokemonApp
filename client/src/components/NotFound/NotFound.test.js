import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender } from "@testing-library/react";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );

test("renders Not Found component", () => {
  const component = render(<NotFound />);
  component.getByText("Page not found");
});
