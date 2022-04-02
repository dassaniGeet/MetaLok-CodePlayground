import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../pages/style.css' //Fiel to Edit for Css in this particular implementation.
import Iframe from 'react-iframe'
import { Grid } from '@mui/material';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Sample3 () {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{xs:3}} columns={{xs:3}}
                direction="row"
                justifyContent="center"
                alignItems="center">
                    <Grid item>
                        <Item>
                                <div style={{  width: 150}}>
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
                                                    
                                                </Row>
                                            ))}
                                        </div>
                        </Item>
                        <Item>
                        <div style={{  width: 150}}>
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
                                                    
                                                </Row>
                                            ))}
                                        </div>
                        </Item>
                        <Item>
                        <div style={{  width: 150}}>
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
                                            
                                        </Row>
                                    ))}
                                </div>
                        </Item>
                    </Grid>
                    <Grid item> 
                        <Item>
                                <div style={{  width: 150}}>
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
                                            
                                        </Row>
                                    ))}
                                </div>
                        </Item>
                        <Item>
                        <Iframe url="https://www.youtube.com/embed/ZVOGPvo08zM"
                            width="200px"
                            height="200px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />
                        </Item>
                        <Item>
                        <div style={{  width: 150}}>
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
                                                    
                                                </Row>
                                            ))}
                                        </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                        <div style={{  width: 150}}>
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
                                            
                                        </Row>
                                    ))}
                                </div>
                        </Item>
                        <Item>
                        <div style={{  width: 150}}>
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
                                                    
                                                </Row>
                                            ))}
                                        </div>
                        </Item>
                        <Item>
                                <div style={{  width: 150}}>
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
                                                    
                                                </Row>
                                            ))}
                                        </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Sample3
