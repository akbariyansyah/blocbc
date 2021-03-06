import React from 'react'
import { Carousel, Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchHeadline } from '../redux/news/headline/headlineActions'
import { useEffect } from 'react'
import '../../components/assets/css/style.css'

const Header = ({ headlineData, fetchHeadline }) => {
    useEffect(() => {
        fetchHeadline()
    }, [])


    return headlineData.loading ? (
        <Container style={{ width: '75rem', height: '40rem' }}>
            <Spinner className="loading-spinner" animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    ) : (
            <Container style={{ height: '40rem', marginTop: '1rem' }}>
                <Carousel className="image-header-carousel" fluid>
                    {headlineData && headlineData.posts && headlineData.posts.map((post,index) =>
                        (
                            <Carousel.Item interval={2500}>
                                {console.log()}
                                <img
                                    className="image-header"
                                    src={post.image}
                                />
                                <Carousel.Caption>
                                    <a href={post.url} target="_blank"><h3 className="post-title">{post.title}</h3></a>
                                    <p> - {post.author} - </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    )}
                </Carousel>
            </Container>
        )
}
const mapStateToProps = state => {
    return {
        headlineData: state.headline
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchHeadline: () => dispatch(fetchHeadline())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)