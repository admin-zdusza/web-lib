import React from 'react';
import {WsBrand} from '../../../js/components/ws-brand/WsBrand';
import {createRenderer} from 'react-test-renderer/shallow';

it('should render', () => {
    const renderer = createRenderer();
    renderer.render(<WsBrand appName='Tester'/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
