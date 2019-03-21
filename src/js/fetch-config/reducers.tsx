import {FetchConfigAction, FetchConfigState, FETCH_CONFIG} from './types';

const initialState = {
  isLoading: false,
  data: null,
};

export const fetchConfigReducer = <T extends {}>(
  state: FetchConfigState<T> = initialState,
  action: FetchConfigAction<T>): FetchConfigState<T> => {
  switch (action.type) {
    case FETCH_CONFIG.REQUEST:
      return {...state, isLoading: true, data: null};
    case FETCH_CONFIG.SUCCESS:
      return {...state, isLoading: false, data: action.data};
    case FETCH_CONFIG.FAILURE:
      return {...state, isLoading: false, data: null};
    default:
      return state;
  }
};
