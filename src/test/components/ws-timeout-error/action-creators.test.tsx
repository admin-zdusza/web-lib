import {
    timeoutAcknowledged,
    timeoutOccured
} from '../../../js/components/ws-timeout-error/actions-creators';

it('should create unexpected error occured', async () => {
    expect(timeoutOccured()).toMatchSnapshot();
});

it('should create unexpected error acknowledged', async () => {
    expect(timeoutAcknowledged()).toMatchSnapshot();
});
