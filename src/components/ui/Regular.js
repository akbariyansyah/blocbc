import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import '../../components/assets/css/style.css'
import Fade from 'react-reveal/Fade';
import { fetchRegular } from '../redux/news/regular/regularActions';
import '../../components/assets/css/style.css'

function Regular({ regularData, fetchRegular }) {
    useEffect(() => {
        fetchRegular()
    }, [])
    return regularData.loading ? (
        <div>
            <Container>
                <Spinner>
                    <h1>Loading</h1>
                </Spinner>
            </Container>
        </div>
    ) : (
            <Container className="regular-container">
                {regularData && regularData.posts && regularData.posts.map(post =>
                    (
                        <Fade bottom>
                            <Row>
                                <Col xs={12} sm={6} lg={8}>
                                    <Card border="grey" bg="dark" text="light" style={{ width: '45rem', height: '15rem', marginBottom: '20px' }}>
                                        <Card.Header>{post.author}</Card.Header>
                                        <Card.Body>
                                            <Card.Title className="regular-header">{post.title}</Card.Title>
                                            <Card.Text>
                                                {post.description}
                                            </Card.Text>
                                            <footer className="blockquote-footer">
                                                Published at <cite title="Source Title">{post.publishedAt}</cite>
                                            </footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={2} lg={4}>
                                    <div className="regular-image-container">
                                        <img alt="image-mini" src={post.urlToImage} />
                                    </div>
                                </Col>
                            </Row>
                        </Fade>
                    )
                )}
            </Container>
        )
}
const mapStateToProps = state => {
    return {
        regularData: state.regular
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchRegular: () => dispatch(fetchRegular())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Regular)
