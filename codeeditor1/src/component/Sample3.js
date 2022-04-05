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
import TableComponent from './TableComponent'
// import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



    const Company = (a) => {
        const navigate = useNavigate();
        if (a === 5) {
            navigate('/')
        }
    }
    let a = 1;
    return (
        <Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 0 }} columns={{ xs: 3 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //1-9
                                                backgroundColor: 'Black',
                                            }}>
                                                
                                                <TableComponent a={a} />
                                                {a=a+1}

                                            </Col>))}

                                    </Row>
                                ))}
                            </div>
                        </Item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //10-18
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //19-27
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //28-36
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
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
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //37-45
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                    <Item>
                            <div style={{ width: 150,
                                          padding: 0,
                                          spacing: 12,}} >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                        <Col className="boxCorner" style={{
                                            backgroundColor: 'Black',
                                        }}>
                                            <TableComponent a={a} />
                                                {a=a+1}
                                        </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //46-54
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //55-63
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                        <Item>
                            <div style={{ width: 150 }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="box box 23" style={{            //64-72
                                                backgroundColor: 'Black',
                                            }}>
                                                <p>
                                                    {a}
                                                </p>
                                                {a = a + 1}
                                            </Col>))}
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
