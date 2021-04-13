import {
  timeoutAcknowledged,
  timeoutOccured,
} from "../../../src/components/timeout-error/actions-creators";

it("should create timeout error occured", async () => {
  expect(timeoutOccured()).toMatchSnapshot();
});

it("should create timeout error acknowledged", async () => {
  expect(timeoutAcknowledged()).toMatchSnapshot();
});
