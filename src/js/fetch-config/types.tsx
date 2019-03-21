export interface FetchConfigState<T> {
    isLoading: boolean;
    data: T | null;
}

export enum FETCH_CONFIG {
    REQUEST = 'FETCH_CONFIG_REQUEST',
    SUCCESS = 'FETCH_CONFIG_SUCCESS',
    FAILURE = 'FETCH_CONFIG_FAILURE',
}

export type FetchConfigAction<T> =
    | { type: FETCH_CONFIG.REQUEST; }
    | { type: FETCH_CONFIG.SUCCESS; data: T }
    | { type: FETCH_CONFIG.FAILURE };
