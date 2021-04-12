import { TIMEOUT, TimeoutAction } from "./types";

const initialState: boolean = false;

const timeoutReducer = (
  state = initialState,
  action: TimeoutAction
): boolean => {
  switch (action.type) {
    case TIMEOUT.OCCURED:
      return true;
    case TIMEOUT.ACKNOWLEDGED:
      return false;
    default:
      return state;
  }
};

export { timeoutReducer };
