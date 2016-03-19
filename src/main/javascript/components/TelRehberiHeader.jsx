/**
 * @author hasan
 * Created at 18.03.2016.
 */

import React from 'react';
import DOM from 'react-dom';

import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, Panel, DropdownButton, MenuItem, Input} from 'react-bootstrap';

const searchDropdown = (
    <DropdownButton id="searchDropdown"
                    className="searchbar-btn"
                    bsStyle="primary"
                    title="Ad - Soyad">

        <MenuItem eventKey="1" active>Ad - Soyad</MenuItem>
        <MenuItem eventKey="2">Kat</MenuItem>
        <MenuItem eventKey="3">Oda</MenuItem>

    </DropdownButton>
);

export default class TelRehberiHeader extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <Row>
                                <Col md={5}>
                                    <Nav bsStyle="pills" activeKey={1}>
                                        <NavItem eventKey={1} href="#">Rehber</NavItem>
                                        <NavItem eventKey={2} href="#">Merkez</NavItem>
                                        <NavItem eventKey={3} href="#">Bölgeler</NavItem>
                                        <NavItem eventKey={4} href="#">Personel İstatistikleri</NavItem>
                                    </Nav>
                                </Col>
                                <Col md={6} mdOffset={1}>
                                    <Input className="searchbar"
                                           type="text"
                                           placeholder="Ara..."
                                           buttonAfter={searchDropdown}/>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

TelRehberiHeader.defaultProps = {};
TelRehberiHeader.propTypes = {};