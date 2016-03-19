/**
 * @author hasan
 * Created at 20.03.2016.
 */

import React from 'react';
import DOM from 'react-dom';

import {Navbar} from 'react-bootstrap';

export default class TelRehberiFooter extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Navbar fixedBottom>
                <Navbar.Text>Lorem ipsum dolor sit amet</Navbar.Text>
                <Navbar.Text pullRight>Lorem ipsum dolor sit amet</Navbar.Text>
            </Navbar>
        );
    }
}

TelRehberiFooter.defaultProps = {};
TelRehberiFooter.propTypes = {};