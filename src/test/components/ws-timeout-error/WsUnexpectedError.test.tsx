import React from 'react';
import { onClick, onHide, WsTimeoutError } from '../../../js/components/ws-timeout-error/WsTimeoutError';
import { createRenderer } from 'react-test-renderer/shallow';

it('should render closeable', () => {
    const renderer = createRenderer();
    renderer.render(<WsTimeoutError dispatch={jest.fn()} closable={true}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render not closeable', () => {
    const renderer = createRenderer();
    renderer.render(<WsTimeoutError dispatch={jest.fn()} closable={false}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should dispatch on click', () => {
    const dispatch = jest.fn();
    onClick(dispatch)();
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should dispatch on hide', () => {
    const dispatch = jest.fn();
    onHide(true, dispatch)();
    expect(dispatch.mock.calls).toMatchSnapshot();
});

it('should not dispatch on hide', () => {
    const dispatch = jest.fn();
    onHide(false, dispatch)();
    expect(dispatch.mock.calls).toMatchSnapshot();
});
