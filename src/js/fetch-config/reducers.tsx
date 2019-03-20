import {FetchConfigAction, FetchConfigState, FETCH_CONFIG} from './types';

const initialState = {
  isLoading: false,
  data: null,
  failed: false,
  showModal: false,
};

export const fetchConfigReducer = <T extends {}>(
  state: FetchConfigState<T> = initialState,
  action: FetchConfigAction<T>): FetchConfigState<T> => {
  switch (action.type) {
    case FETCH_CONFIG.REQUEST:
      return {...state, isLoading: true, data: null, failed: false, showModal: false};
    case FETCH_CONFIG.SUCCESS:
      return {...state, isLoading: false, data: action.data, failed: false, showModal: false};
    case FETCH_CONFIG.FAILURE:
      return {...state, isLoading: false, data: null, failed: true, showModal: true};
    case FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST:
      return {...state, isLoading: false, data: null, failed: true, showModal: false};
    default:
      return state;
  }
};
