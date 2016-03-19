/**
* @author hasan
* Created at 12.03.2016.
*/
import React from 'react';
import DOM from 'react-dom';

import TelRehberiHeader from './TelRehberiHeader.jsx';
import TelRehberiNav from './TelRehberiNav.jsx';
import TelRehberiBody from './TelRehberiBody.jsx';
import TelRehberiFooter from './TelRehberiFooter.jsx';

export default class TelRehberi extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <TelRehberiNav />
                <TelRehberiHeader />
                <TelRehberiBody />
                <TelRehberiFooter />
            </div>
        );
    }
}