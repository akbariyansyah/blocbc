
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from "react-bootstrap";
import { fetchSource } from '../redux/news/source/sourceActions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import '../../components/assets/css/style.css'

const Source = ({ sourceData, fetchSource }) => {
    useEffect(() => {
        fetchSource()
    }, [])
    const [settings, setSettings] = useState({
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 2,

    });
    return (
        <Container style={{ justifyContent: 'center', marginTop: '8rem' }}>
            <h2 style={{ marginBottom: '3rem', fontFamily: 'Noto' }}> Our Top Sources </h2>
            <Slider {...settings}>
                {sourceData && sourceData.posts && sourceData.posts.map(post => <div className="source-slider">
                    <Card bg="info" style={{ width: '18rem' }}>
                        <Card.Header>{post.url}</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.name}</Card.Title>
                            <Card.Text>
                                {post.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                )}
            </Slider>
        </Container >
    );

}
const mapStateToProps = state => {
    return {
        sourceData: state.source
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSource: () => dispatch(fetchSource())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Source)