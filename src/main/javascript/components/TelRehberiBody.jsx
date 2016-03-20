/**
 * @author hasan
 * Created at 20.03.2016.
 */

require('fixed-data-table/dist/fixed-data-table.min.css');

import React from 'react';
import DOM from 'react-dom';
import _ from 'lodash';

import FakeDB from '../store/fake/fake-db';

import {Grid, Row, Col} from 'react-bootstrap';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Table, Column, Cell} from 'fixed-data-table';

export default class TelRehberiBody extends React.Component {

    constructor() {
        super();
        this.state = {
            birimler: FakeDB.birimler(20),
            altbirimler: FakeDB.altbirimler(5),
            personel: []
        };
    }

    render() {
        var birimler = _.map(this.state.birimler, (birim, index) => {
                return (
                    <ListGroupItem key={index}
                                   onClick={this._changeAltbirimlist.bind(this)}
                                   active={index === 0}>
                        {_.toUpper(birim)}
                    </ListGroupItem>
                );
            });

        return (
            <Grid>
                <Panel>
                    <Row>
                        <Col md={3}>
                            <h3>Birimler</h3>
                            <ListGroup>
                                {birimler}
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <h3>Alt Birimler</h3>
                            <Table rowsCount={5}
                                   rowHeight={50}
                                   width={800}
                                   height={310}
                                   headerHeight={50}>
                                <Column width={100}
                                        flexGrow={1}
                                        columnKey="ad"
                                        header={<Cell>Birim</Cell>}
                                        cell={this._getCell.bind(this)} />

                                <Column width={160}
                                        columnKey="sorumlu"
                                        header={<Cell>Sorumlu</Cell>}
                                        cell={this._getCell.bind(this)}/>
                                <Column width={120}
                                        columnKey="oda"
                                        header={<Cell>Oda</Cell>}
                                        cell={this._getCell.bind(this)} />
                                <Column width={160}
                                        columnKey="tel"
                                        header={<Cell>Telefon</Cell>}
                                        cell={this._getCell.bind(this)} />
                            </Table>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }

    _changeAltbirimlist() {
        this.setState({
            altbirimler: FakeDB.altbirimler(5)
        });
    }

    _getCell({columnKey, rowIndex}) {
        var cell = this.state.altbirimler[rowIndex][columnKey];
        console.log(cell);
        return (
            <Cell>{cell}</Cell>
        );
    }
}

TelRehberiBody.defaultProps = {};
TelRehberiBody.propTypes = {};