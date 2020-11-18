
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Col, Row, Spinner } from "react-bootstrap";
import { fetchSource } from '../redux/news/source/sourceActions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import '../../components/assets/css/style.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log(style)
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", marginLeft: '4rem' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


const Source = ({ sourceData, fetchSource }) => {
    useEffect(() => {
        fetchSource()
    }, [])
    const [settings, setSettings] = useState({
        accessibility: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: true,
        rows: 1,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }]

    });
    return sourceData.loading ? (
        <Container style={{ width: '75rem', height: '40rem' }}>
            <Spinner className="loading-spinner" animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    ) : (
            <Container className="source-contaienr">
                <Row>
                    <Col>
                        <h2 style={{ marginBottom: '3rem', fontFamily: 'Noto' }}> Our Top Sources </h2>
                        <Slider {...settings}>
                            {sourceData && sourceData.posts && sourceData.posts.map((post, index) => <div className="source-slider">
                                <Card style={{ backgroundColor: '#fff5ea' }} border={index % 2 === 0 ? "primary" : index % 3 === 0 ? "info" : index % 5 === 0 ? "warning" : index % 7 === 0 ? "dark" : index % 11 === 0 ? "secondary" : "success"} style={{ width: '15rem' }}>
                                    <Card.Header><a href={post.url} target="_blank">{post.url}</a></Card.Header>
                                    <Card.Body>
                                        <Card.Title>{post.name}</Card.Title>
                                        <Card.Text>
                                            {post.description.substring(0, 100)}...
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            )}
                        </Slider>
                    </Col>
                </Row>
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