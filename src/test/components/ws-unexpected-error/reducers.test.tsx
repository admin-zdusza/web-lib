import {unexpectedErrorReducer} from '../../../js/components/ws-unexpected-error/reducers';
import {UNEXPECTED_ERROR} from '../../../js/components/ws-unexpected-error/types';

it('should reduce unexpected error occured', () => {
    expect(unexpectedErrorReducer(undefined, {type: UNEXPECTED_ERROR.OCCURED})).toMatchSnapshot();
});

it('should reduce unexpected error acknowledged', () => {
    expect(unexpectedErrorReducer(undefined, {type: UNEXPECTED_ERROR.ACKNOWLEDGED})).toMatchSnapshot();
});

it('should reduce to default', () => {
    // @ts-ignore
    expect(unexpectedErrorReducer({}, {type: undefined})).toMatchSnapshot();
});
