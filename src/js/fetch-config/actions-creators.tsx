import {FETCH_CONFIG} from './types';
import {unexpectedErrorOccured} from '../components/ws-unexpected-error/actions-creators';

const fetchConfig = () => (dispatch: Function) => {
    dispatch(fetchConfigRequest());
    return fetch('/page/initialdata')
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => dispatch(fetchConfigSuccess(data)));
            } else {
                dispatch(fetchConfigFailure());
                dispatch(unexpectedErrorOccured());
                return;
            }
        })
        .catch(e => {
            console.error(e);
            dispatch(fetchConfigFailure());
            dispatch(unexpectedErrorOccured());
        })
};

const fetchConfigRequest = () => ({type: FETCH_CONFIG.REQUEST});

const fetchConfigSuccess = <T extends {}>(data: T) => ({type: FETCH_CONFIG.SUCCESS, data});

const fetchConfigFailure = () => ({type: FETCH_CONFIG.FAILURE});

export {
    fetchConfig,
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure,
}
