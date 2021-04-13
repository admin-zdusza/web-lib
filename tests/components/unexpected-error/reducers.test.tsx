import { unexpectedErrorReducer } from "../../../src";
import { UNEXPECTED_ERROR } from "../../../src/components/unexpected-error/types";

it("should reduce unexpected error occured", () => {
  expect(
    unexpectedErrorReducer(undefined, { type: UNEXPECTED_ERROR.OCCURED })
  ).toMatchSnapshot();
});

it("should reduce unexpected error acknowledged", () => {
  expect(
    unexpectedErrorReducer(undefined, { type: UNEXPECTED_ERROR.ACKNOWLEDGED })
  ).toMatchSnapshot();
});

it("should reduce to default", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(unexpectedErrorReducer(false, { type: undefined })).toMatchSnapshot();
});
