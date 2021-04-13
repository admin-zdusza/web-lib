export enum UNEXPECTED_ERROR {
  OCCURED = "UNEXPECTED_ERROR_OCCURED",
  ACKNOWLEDGED = "UNEXPECTED_ERROR_ACKNOWLEDGED",
}

export type UnexpectedErrorAction =
  | { type: UNEXPECTED_ERROR.OCCURED }
  | { type: UNEXPECTED_ERROR.ACKNOWLEDGED };
