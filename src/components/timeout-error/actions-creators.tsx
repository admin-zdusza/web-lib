import { TIMEOUT } from "./types";

const timeoutOccured = () => ({ type: TIMEOUT.OCCURED });

const timeoutAcknowledged = () => ({ type: TIMEOUT.ACKNOWLEDGED });

export { timeoutOccured, timeoutAcknowledged };
