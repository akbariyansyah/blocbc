import React from 'react'
import { Container } from 'react-bootstrap'
import '../../components/assets/css/style.css'
import Fade from 'react-reveal/Fade';

export default function Banner() {
    return (
        <Container>
            <Fade bottom>
            <h1 className="banner-word">Feed !</h1>
            </Fade>
        </Container>
    )
}
