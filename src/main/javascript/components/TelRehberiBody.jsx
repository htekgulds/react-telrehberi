/**
 * @author hasan
 * Created at 20.03.2016.
 */

require('fixed-data-table/dist/fixed-data-table.min.css');

import React from 'react';
import DOM from 'react-dom';

import {Grid, Row, Col} from 'react-bootstrap';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Table, Column, Cell} from 'fixed-data-table';

export default class TelRehberiBody extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid>
                <Panel>
                    <Row>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroupItem active href="#">HELLO</ListGroupItem>
                                <ListGroupItem href="#">LOREM</ListGroupItem>
                                <ListGroupItem href="#">IPSUM</ListGroupItem>
                                <ListGroupItem href="#">DOLOR</ListGroupItem>
                                <ListGroupItem href="#">SET</ListGroupItem>
                                <ListGroupItem href="#">AMET</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <Table rowsCount={20} rowHeight={30} width={800} height={600} headerHeight={30}>
                                <Column width={100}
                                        flexGrow={1}
                                        header={<Cell>Lorem</Cell>}
                                        cell={<Cell>Hello world whazzup</Cell>} />

                                <Column width={160}
                                        header={<Cell>Ipsum</Cell>}
                                        cell={<Cell>lorem</Cell>}/>
                                <Column width={120}
                                        header={<Cell>Dolor</Cell>}
                                        cell={<Cell>ipsum</Cell>} />
                                <Column width={120}
                                        header={<Cell>Dolor</Cell>}
                                        cell={<Cell>ipsum</Cell>} />
                            </Table>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}

TelRehberiBody.defaultProps = {};
TelRehberiBody.propTypes = {};