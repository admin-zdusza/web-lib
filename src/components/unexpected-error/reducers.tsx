import { UNEXPECTED_ERROR, UnexpectedErrorAction } from "./types";

const initialState: boolean = false;

const unexpectedErrorReducer = (
  state = initialState,
  action: UnexpectedErrorAction
): boolean => {
  switch (action.type) {
    case UNEXPECTED_ERROR.OCCURED:
      return true;
    case UNEXPECTED_ERROR.ACKNOWLEDGED:
      return false;
    default:
      return state;
  }
};

export { unexpectedErrorReducer };
