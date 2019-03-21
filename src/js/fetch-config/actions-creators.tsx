import {FETCH_CONFIG} from './types';

const fetchConfig = () => (dispatch: Function) => {
    dispatch(fetchConfigRequest());
    return fetch('/page/initialdata')
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => dispatch(fetchConfigSuccess(data)));
            } else {
                dispatch(fetchConfigFailure());
                return;
            }
        })
        .catch(e => {
            console.error(e);
            dispatch(fetchConfigFailure());
        })
};

const fetchConfigRequest = () => ({type: FETCH_CONFIG.REQUEST});

const fetchConfigSuccess = <T extends {}>(data: T) => ({type: FETCH_CONFIG.SUCCESS, data});

const fetchConfigFailure = () => ({type: FETCH_CONFIG.FAILURE});

const fetchConfigCloseErrorModalRequest = () => ({type: FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST});

export {
    fetchConfig,
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure,
    fetchConfigCloseErrorModalRequest
}
