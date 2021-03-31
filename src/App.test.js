import {
  render,
  screen,
} from "../../nightbornexo1/node_modules/@testing-library/react";
import App from "./composant/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
