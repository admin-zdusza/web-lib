export enum TIMEOUT {
  OCCURED = "TIMEOUT_OCCURED",
  ACKNOWLEDGED = "TIMEOUT_ACKNOWLEDGED",
}

export type TimeoutAction =
  | { type: TIMEOUT.OCCURED }
  | { type: TIMEOUT.ACKNOWLEDGED };
