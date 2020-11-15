import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
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

            </Container>
        </div>
    ) : (
            <Container className="regular-container">
                {regularData && regularData.posts && regularData.posts.map(post =>
                    (
                        <Fade bottom>
                            <Row>
                                <Col lg={8}>
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
                                <Col lg={4}>
                                    <img style={{ width: '20rem', height: '15rem', marginLeft: '2rem' }} variant="right" src={post.urlToImage} />
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
