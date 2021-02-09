import React from 'react';

import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';

function ShowCase({ }) {
    let cardItems = [];
    for (var i = 0; i < 10; i++) {
        cardItems.push(
            <Col  key={i}  xs="3" md="2" className="text-center mr-3">
                <Card className="miniCard">
                    <Card.Img variant="top" src="http://placekitten.com/200/200" className="miniCardImg" />
                    <small className="text-muted smallText">Song Feel lkdkk jdjjd dj</small>
                </Card>
                <small className="text-white ml-n2">1</small>
            </Col>
        )
    }
    return (

        <Card className="showCaseCard px-3 pt-2">
            <Row noGutters="true" className="p-2 ml-2">
                {cardItems}
            </Row>
        </Card>

    );
}

export default ShowCase
