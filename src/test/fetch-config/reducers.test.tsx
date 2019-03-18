import {fetchConfigReducer} from "../../js/fetch-config/reducers";
import {FETCH_CONFIG} from "../../js/fetch-config/types";

it('should reduce fetch config request', () => {
    expect(fetchConfigReducer(undefined, {type: FETCH_CONFIG.REQUEST})).toMatchSnapshot();
});

it('should reduce fetch config success', () => {
    expect(fetchConfigReducer(undefined, {
        type: FETCH_CONFIG.SUCCESS,
        data: {accountsUrl: 'dummyAccountsUrl'}
    })).toMatchSnapshot();
});

it('should reduce fetch config failure', () => {
    expect(fetchConfigReducer(undefined, {
        type: FETCH_CONFIG.FAILURE,
    })).toMatchSnapshot();
});

it('should reduce fetch config close error modal request', () => {
    expect(fetchConfigReducer(undefined, {
        type: FETCH_CONFIG.CLOSE_ERROR_MODAL_REQUEST,
    })).toMatchSnapshot();
});

it('should reduce to default', () => {
    // @ts-ignore
    expect(fetchConfigReducer({}, {type: undefined})).toMatchSnapshot();
});
