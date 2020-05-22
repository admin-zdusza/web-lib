import { timeoutReducer } from '../../../js/components/ws-timeout-error/reducers';
import { TIMEOUT } from '../../../js/components/ws-timeout-error/types';

it('should reduce unexpected error occured', () => {
    expect(timeoutReducer(undefined, {type: TIMEOUT.OCCURED})).toMatchSnapshot();
});

it('should reduce unexpected error acknowledged', () => {
    expect(timeoutReducer(undefined, {type: TIMEOUT.ACKNOWLEDGED})).toMatchSnapshot();
});

it('should reduce to default', () => {
    // @ts-ignore
    expect(timeoutReducer(false, {type: undefined})).toMatchSnapshot();
});
