import {FetchConfigAction, FetchConfigState, FETCH_CONFIG} from './types';
import {User} from '../user/types';

const initialState = {
    isLoading: false,
    data: undefined,
};

export const fetchConfigReducer = <T extends { user: User }>(
    state: FetchConfigState<T> = initialState,
    action: FetchConfigAction<T>): FetchConfigState<T> => {
    switch (action.type) {
        case FETCH_CONFIG.REQUEST:
            return {...state, isLoading: true, data: undefined};
        case FETCH_CONFIG.SUCCESS:
            const data = {...action.data};
            delete data.user;
            return {...state, isLoading: false, data};
        case FETCH_CONFIG.FAILURE:
            return {...state, isLoading: false, data: undefined};
        default:
            return state;
    }
};
