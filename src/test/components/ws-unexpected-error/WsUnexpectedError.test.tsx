import React from 'react';
import {WsUnexpectedError} from '../../../js/components/ws-unexpected-error/WsUnexpectedError';
import {createRenderer} from 'react-test-renderer/shallow';

it('should render closeable', () => {
    const renderer = createRenderer();
    renderer.render(<WsUnexpectedError dispatch={jest.fn()} closable={true}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render not closeable', () => {
    const renderer = createRenderer();
    renderer.render(<WsUnexpectedError dispatch={jest.fn()} closable={false}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
