import {fetchConfigFailure, fetchConfigSuccess} from './actions-creators';
import {FETCH_CONFIG} from './types';
import {call, put, takeLatest} from 'redux-saga/effects';

export function* fetchConfig(): any {
    try {
        const response = yield call(fetch, '/page/initialdata');
        if (response.status === 200) {
            const data = yield response.json();
            yield put(fetchConfigSuccess(data))
        } else {
            yield put(fetchConfigFailure())
        }
    } catch (e) {
        console.error(e);
        yield put(fetchConfigFailure())
    }
}

function* fetchConfigSaga() {
    yield takeLatest(FETCH_CONFIG.REQUEST, fetchConfig);
}

export default fetchConfigSaga;
