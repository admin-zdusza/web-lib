export interface FetchConfigState<T> {
    isLoading: boolean;
    data: T | null;
    failed: boolean;
    showModal: boolean;
}

export enum FETCH_CONFIG {
    REQUEST = 'FETCH_CONFIG_REQUEST',
    SUCCESS = 'FETCH_CONFIG_SUCCESS',
    FAILURE = 'FETCH_CONFIG_FAILURE',
    CLOSE_ERROR_MODAL_REQUEST = 'FETCH_CONFIG_CLOSE_ERROR_MODAL_REQUEST',
}

export type FetchConfigAction<T> =
    | { type: FETCH_CONFIG.REQUEST; }
    | { type: FETCH_CONFIG.SUCCESS; data: T }
    | { type: REQUEST.FAILURE }
    | { type: FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST };
