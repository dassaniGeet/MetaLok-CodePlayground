import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../pages/style.css'
import Iframe from 'react-iframe'

function Sample() {
    return (
        <div>
            <div style={{ display: 'block', width: 800 }}>
                {Array.from(Array(3)).map((_, index) => (
                    <Row>
                        <Col className="box box 23" style={{
                            backgroundColor: 'Black',
                        }}>
                            1
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            2
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            3
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            4
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            5
                        </Col>
                    </Row>
                ))}
            </div>

            <div style={{ display: 'block', width: 500 }}>
                <Iframe url="https://www.youtube.com/embed/ZVOGPvo08zM"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>

            <div style={{ display: 'block', width: 500 }}>
                {Array.from(Array(3)).map((_, index) => (
                    <Row>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            1
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            2
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            3
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            4
                        </Col>
                        <Col className="box" style={{
                            backgroundColor: 'Black',
                        }}>
                            5
                        </Col>
                    </Row>
                ))}
            </div>

        </div>
    )
}

export default Sample
