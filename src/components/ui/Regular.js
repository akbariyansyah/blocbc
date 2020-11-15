import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../../components/assets/css/style.css'

export default function Regular() {
    return (
        <Container className="regular-container">
            <Row>
                <Col lg="8"> 
                    <Card border="grey" bg="dark" text="light" style={{ width: '45rem',height: '15rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card.Img height="250px" width="250px" variant="right" src="https://images.unsplash.com/photo-1605286985033-a8ecd1a039f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80" />
                </Col>
            </Row>
            <Row>
                <Col lg="8"> 
                    <Card border="grey" bg="dark" text="light" style={{ width: '45rem',height: '15rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card.Img height="250px" width="250px" variant="right" src="https://images.unsplash.com/photo-1605286985033-a8ecd1a039f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80" />
                </Col>
            </Row>
            <Row>
                <Col lg="8"> 
                    <Card border="grey" bg="dark" text="light" style={{ width: '45rem',height: '15rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                         </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card.Img height="250px" width="250px" variant="right" src="https://images.unsplash.com/photo-1605286985033-a8ecd1a039f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80" />
                </Col>
            </Row>

        </Container>
    )
}
