import React from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap'
import '../../components/assets/css/style.css'
import Fade from 'react-reveal/Fade';
import { fetchRegular } from '../redux/news/regular/regularActions';
import '../../components/assets/css/style.css'

function Regular({ regularData, fetchRegular }) {
    const [keyword, setkeyword] = useState("")
    useEffect(() => {
        fetchRegular(keyword)
    }, [keyword])
    return regularData.loading ? (
        <Container style={{ width: '75rem', height: '40rem' }}>
            <Spinner className="loading-spinner" animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    ) : (
            <>
                <Container>
                    <div style={{ margin: '0 auto' }}>
                        <h1>Category</h1>
                        <br></br>
                        <div style={{ justifyContent: 'center', marginBottom: '4rem' }}>
                            <Button onClick={() => setkeyword("")} variant="outline-primary">all</Button>{' '}
                            <Button onClick={() => setkeyword("business")} variant="outline-secondary">business</Button>{' '}
                            <Button onClick={() => setkeyword("health")} variant="outline-success">health</Button>{' '}
                            <Button onClick={() => setkeyword("sports")} variant="outline-warning">sport</Button>{' '}
                            <Button onClick={() => setkeyword("entertainment")} variant="outline-danger">entertainment</Button>{' '}
                            <Button onClick={() => setkeyword("science")} variant="outline-info">science</Button>{' '}
                            <Button onClick={() => setkeyword("technology")} variant="outline-dark">technology</Button>
                        </div>
                        <br />
                        <h1>{keyword}</h1>
                    </div>
                </Container>
                <Container className="regular-container">
                    {regularData && regularData.posts && regularData.posts.map(post =>
                        (
                            <Fade bottom>
                                <Row className="regular-row">
                                    <Col xs={12} sm={12} md={8}>
                                        <Card border="grey" bg="light" style={{ width: '100%', height: '15rem', marginBottom: '20px' }}>
                                            <Card.Header className="card-header">{post.author}</Card.Header>
                                            <Card.Body>
                                                <Card.Title className="regular-header"><a href={post.url} target="_blank"><b>{post.title}...</b></a></Card.Title>
                                                <Card.Text>
                                                    {post.description} <a href={post.url} target="_blank">Read More</a>
                                                </Card.Text>
                                                <footer className="blockquote-footer">
                                                    Published at <cite title="Source Title">{post.publishedAt}</cite>
                                                </footer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4}>
                                        <div className="regular-image-container">
                                            <img alt="img-mini" src={post.urlToImage} />
                                        </div>
                                    </Col>

                                </Row>
                            </Fade>
                        )
                    )}
                </Container>
            </>
        )
}
const mapStateToProps = state => {
    return {
        regularData: state.regular
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchRegular: keyword => dispatch(fetchRegular(keyword))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Regular)
