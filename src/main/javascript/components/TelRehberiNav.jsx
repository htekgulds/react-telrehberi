/**
 * @author hasan
 * Created at 20.03.2016.
 */

import React from 'react';
import DOM from 'react-dom';

import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

export default class TelRehberiNav extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Telefon Rehberi</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullRight>
                    <Button bsStyle="primary">Görüş ve Öneriler</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Lütfen oda ve telefon değişikliklerini bildiriniz</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

TelRehberiNav.defaultProps = {};
TelRehberiNav.propTypes = {};