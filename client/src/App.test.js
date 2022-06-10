import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store";


const render = (component) =>
  rtlRender(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );


test('renders learn react link', () => {
  render(<App />)
});
