import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

interface WsSiteLoaderProps {
}

export class WsSiteLoader extends Component<WsSiteLoaderProps> {
    render() {
        return (<div className='site-loader-wrapper'>
            <div className='site-loader'>
                <Loader type='Bars' height='100' width='100'/>
            </div>
        </div>);
    }
}
