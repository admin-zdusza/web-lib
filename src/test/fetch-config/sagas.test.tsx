import {fetchConfigSaga, fetchConfig} from '../../js/fetch-config/sagas';
import nock from 'nock';
import {runSaga} from 'redux-saga';

beforeEach(() => {
    nock.cleanAll();
});

it('should run with success', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, {});

    const dispatched: any = [];
    await runSaga(
        {
            dispatch: (action) => dispatched.push(action)
        },
        fetchConfig,
    ).toPromise();

    expect(dispatched).toMatchSnapshot();
});

it('should fail to parse response', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(200, 'test');

    const dispatched: any = [];
    await runSaga(
        {
            dispatch: (action) => dispatched.push(action)
        },
        fetchConfig,
    ).toPromise();

    expect(dispatched).toMatchSnapshot();
});

it('should fail', async () => {
    nock('http://localhost:80')
        .get('/page/initialdata')
        .reply(500);

    const dispatched: any = [];
    await runSaga(
        {
            dispatch: (action) => dispatched.push(action)
        },
        fetchConfig,
    ).toPromise();

    expect(dispatched).toMatchSnapshot();
});

it('should take latest', () => {
    const generator = fetchConfigSaga();

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next().done).toMatchSnapshot();
});
