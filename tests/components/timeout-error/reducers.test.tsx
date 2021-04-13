import { timeoutReducer } from "../../../src";
import { TIMEOUT } from "../../../src/components/timeout-error/types";

it("should reduce timeout error occured", () => {
  expect(
    timeoutReducer(undefined, { type: TIMEOUT.OCCURED })
  ).toMatchSnapshot();
});

it("should reduce timeout error acknowledged", () => {
  expect(
    timeoutReducer(undefined, { type: TIMEOUT.ACKNOWLEDGED })
  ).toMatchSnapshot();
});

it("should reduce to default", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(timeoutReducer(false, { type: undefined })).toMatchSnapshot();
});
