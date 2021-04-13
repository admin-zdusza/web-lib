import { UNEXPECTED_ERROR } from "./types";

const unexpectedErrorOccured = () => ({ type: UNEXPECTED_ERROR.OCCURED });

const unexpectedErrorAcknowledged = () => ({
  type: UNEXPECTED_ERROR.ACKNOWLEDGED,
});

export { unexpectedErrorOccured, unexpectedErrorAcknowledged };
