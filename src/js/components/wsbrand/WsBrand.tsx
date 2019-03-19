import React, {Component} from 'react';
import styles from './WsBrand.css';

interface BrandProps {
    appName: string;
}

export class WsBrand extends Component<BrandProps> {
    render() {
        return (<h2>{this.props.appName}<small className={'d-none d-md-inline ' + styles['greyed-small']}> - z duszą!</small></h2>);
    }
}
