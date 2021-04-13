import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TimeoutError } from "../../../src/components/timeout-error/TimeoutError";

test("should render timeout error closable", () => {
  const component = <TimeoutError closable={true} dispatch={jest.fn()} />;
  const { asFragment } = render(component);
  expect(asFragment()).toMatchSnapshot();
});

test("should render timeout error non closable", () => {
  const component = <TimeoutError closable={false} dispatch={jest.fn()} />;
  const { asFragment } = render(component);
  expect(asFragment()).toMatchSnapshot();
});
