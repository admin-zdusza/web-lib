import {FETCH_CONFIG} from './types';

const fetchConfig = () => async (dispatch: Function) => {
    try {
        dispatch({type: 'FETCH_CONFIG_REQUEST'});
        const response = await fetch('/page/initialdata');
        if (response.status === 200) {
            const data = await response.json();
            dispatch(fetchConfigSuccess(data));
        } else {
            dispatch(fetchConfigFailure());
        }
    } catch (e) {
        console.error(e);
        dispatch(fetchConfigFailure());
    }
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
