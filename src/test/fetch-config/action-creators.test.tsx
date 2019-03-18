import {
    fetchConfigRequest,
    fetchConfigSuccess,
    fetchConfigFailure,
    fetchConfigCloseErrorModalRequest
} from "../../js/fetch-config/actions-creators";

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
