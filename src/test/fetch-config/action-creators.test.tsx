import {
    fetchConfig,
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure
} from '../../js/fetch-config/actions-creators';
import nock from 'nock';

beforeEach(() => {
    nock.cleanAll();
});


it('should run with success', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, {});
    const dispatch = jest.fn();
    await fetchConfig()(dispatch);
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should fail to parse response', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, 'test');
    const dispatch = jest.fn();
    await fetchConfig()(dispatch);
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should fail on 400', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(400);
    const dispatch = jest.fn();
    await fetchConfig()(dispatch);
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should fail on 500', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(500);
    const dispatch = jest.fn();
    await fetchConfig()(dispatch);
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should create fetch config request', () => {
    expect(fetchConfigRequest()).toMatchSnapshot();
});

it('should create fetch config success', () => {
    expect(fetchConfigSuccess({accountsUrl: 'dummyAccountsUrl'})).toMatchSnapshot();
});

it('should create fetch config failure', () => {
    expect(fetchConfigFailure()).toMatchSnapshot();
});
