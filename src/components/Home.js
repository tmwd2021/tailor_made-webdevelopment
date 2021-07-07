import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

import Under from '../images/underconstruction.svg'




const Home = () => {
    return (
        <div>
            <Container>
                <Row className='con-top'>
                    <Col>
                    <h1>Welcome to Tailor Made Web Development</h1>
                    <img src={Under} alt="" />
                    <h2>Please Pardon our Dust</h2>
                    <p>Check back soon...</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Home
