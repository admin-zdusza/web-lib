import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UnexpectedError } from "../../../src";

test("should render timeout error closable", () => {
  const component = <UnexpectedError closable={true} dispatch={jest.fn()} />;
  const { asFragment } = render(component);
  expect(asFragment()).toMatchSnapshot();
});

test("should render timeout error non closable", () => {
  const component = <UnexpectedError closable={false} dispatch={jest.fn()} />;
  const { asFragment } = render(component);
  expect(asFragment()).toMatchSnapshot();
});
