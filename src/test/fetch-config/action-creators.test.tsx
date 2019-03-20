import {
    fetchConfig,
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure,
    fetchConfigCloseErrorModalRequest
} from '../../js/fetch-config/actions-creators';
import nock from 'nock';
import {FetchConfigAction} from '../../js/fetch-config/types';

beforeEach(() => {
    nock.cleanAll();
});

type Dummy = {}

it('should run with success', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, {});
    const dispatched: Array<FetchConfigAction<Dummy>> = [];
    const dispatch = (action: FetchConfigAction<Dummy>) => {
        dispatched.push(action);
    };
    await fetchConfig()(dispatch);
    expect(dispatched).toMatchSnapshot();
});

it('should fail to parse response', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, 'test');
    const dispatched: Array<FetchConfigAction<Dummy>> = [];
    const dispatch = (action: FetchConfigAction<Dummy>) => {
        dispatched.push(action);
    };
    await fetchConfig()(dispatch);
    expect(dispatched).toMatchSnapshot();
});

it('should fail on 400', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(400);
    const dispatched: Array<FetchConfigAction<Dummy>> = [];
    const dispatch = (action: FetchConfigAction<Dummy>) => {
        dispatched.push(action);
    };
    await fetchConfig()(dispatch);
    expect(dispatched).toMatchSnapshot();
});

it('should fail on 500', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(500);
    const dispatched: Array<FetchConfigAction<Dummy>> = [];
    const dispatch = (action: FetchConfigAction<Dummy>) => {
        dispatched.push(action);
    };
    await fetchConfig()(dispatch);
    expect(dispatched).toMatchSnapshot();
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

it('should create fetch config close error modal request', () => {
    expect(fetchConfigCloseErrorModalRequest()).toMatchSnapshot();
});
