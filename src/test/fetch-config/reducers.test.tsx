import {fetchConfigReducer} from '../../js/fetch-config/reducers';
import {FETCH_CONFIG} from '../../js/fetch-config/types';

it('should reduce fetch config request', () => {
    expect(fetchConfigReducer(undefined, {type: FETCH_CONFIG.REQUEST})).toMatchSnapshot();
});

it('should reduce fetch config success', () => {
    expect(fetchConfigReducer(undefined, {
        type: FETCH_CONFIG.SUCCESS,
        data: {
            user: {
                email: 'test',
                token: 'test',
                sessionDuration: 1,
                sessionStamp: 'stamp',
                paidTill: undefined,
                role: undefined
            }
        }
    })).toMatchSnapshot();
});

it('should reduce fetch config failure', () => {
    expect(fetchConfigReducer(undefined, {
        type: FETCH_CONFIG.FAILURE,
    })).toMatchSnapshot();
});

it('should reduce to default', () => {
    // @ts-ignore
    expect(fetchConfigReducer({}, {type: undefined})).toMatchSnapshot();
});
