import {
  unexpectedErrorAcknowledged,
  unexpectedErrorOccured,
} from "../../../src/components/unexpected-error/actions-creators";

it("should create unexpected error occured", async () => {
  expect(unexpectedErrorOccured()).toMatchSnapshot();
});

it("should create unexpected error acknowledged", async () => {
  expect(unexpectedErrorAcknowledged()).toMatchSnapshot();
});
