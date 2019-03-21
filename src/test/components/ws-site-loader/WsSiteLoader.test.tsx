import React from 'react';
import {WsSiteLoader} from '../../../js/components/ws-site-loader/WsSiteLoader';
import {createRenderer} from 'react-test-renderer/shallow';

it('should render', () => {
    const renderer = createRenderer();
    renderer.render(<WsSiteLoader/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
