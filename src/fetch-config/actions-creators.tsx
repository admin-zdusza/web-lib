import {FETCH_CONFIG} from './types';

const fetchConfigRequest = () => ({type: FETCH_CONFIG.REQUEST});

const fetchConfigSuccess = <T extends {}>(data: T) => ({type: FETCH_CONFIG.SUCCESS, data});

const fetchConfigFailure = () => ({type: FETCH_CONFIG.FAILURE});

const fetchConfigCloseErrorModalRequest = () => ({type: FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST});

export type FetchConfigAction<T> =
    | { type: FETCH_CONFIG.REQUEST; }
    | { type: FETCH_CONFIG.SUCCESS; data: T }
    | { type: FETCH_CONFIG.FAILURE }
    | { type: FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST };

export {
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure,
    fetchConfigCloseErrorModalRequest
}
