import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Brand } from "../../../src";

test("should render brand", () => {
  const component = <Brand appName={"Monitoring"} />;
  const { asFragment } = render(component);
  expect(asFragment()).toMatchSnapshot();
});
