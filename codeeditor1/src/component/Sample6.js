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


function Sample3() {
    let a = 0;
    return (
        <Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        rowSpacing={0} columnSpacing={{ xs: 0 }} padding={0} className="AdCell"

                    >
                        <Grid item xs={1.5} className="AdCell" id="fadeshow1">
                            <Item className="AdCell" >
                                <Grid container className="AdCell" rowSpacing={0} padding={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifyItems="center" direction="column">
                                    {Array.from(Array(4)).map(function (_, _id1) {
                                        console.log("hi");
                                        return (
                                            <Grid container className="AdCell" padding={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(6)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid item className="AdCell" xs={6}>
                                                            <Item style={{ backgroundColor: "black" }}>
                                                                <Container className="AdCell">
                                                                    <TableComponent a={a} />
                                                                </Container>
                                                            </Item>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        );
                                    })
                                    }
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={5} className="AdCell">
                            <Item className="AdCell">
                                <Grid container className="AdCell" padding={0} rowSpacing={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifyItems="center" direction="column">
                                    <Grid item xs={3} className="AdCell">
                                        <Item className="AdCell">
                                            <Grid container className="AdCell" padding={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(24)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid item xs={2} className="AdCell" >
                                                            <Item className="AdCell" style={{ backgroundColor: "black" }}>
                                                                <Container className="AdCell">
                                                                    <TableComponent a={a} />
                                                                </Container>
                                                            </Item>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        </Item>
                                    </Grid>
                                    <Grid className="AdCell" item xs={9}>
                                        <Item className="AdCell">
                                            <Iframe url="https://www.youtube.com/embed/ZVOGPvo08zM"
                                                width={500}
                                                height={333}
                                                id="myId"
                                                className="myClassname"
                                                display="initial"
                                                position="relative" />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={3} className="AdCell">
                                        <Item className="AdCell" >
                                            <Grid className="AdCell" container padding={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(24)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid item xs={2} >
                                                            <Item className="AdCell" style={{ backgroundColor: "black" }}>
                                                                <Container className="AdCell">
                                                                    <TableComponent a={a} />
                                                                </Container>
                                                            </Item>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={1.5} className="AdCell" id="fadeshow2" >
                            <Item className="AdCell">
                                <Grid container className="AdCell" padding={0} rowSpacing={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifyItems="center" direction="column">
                                    {Array.from(Array(4)).map(function (_, _id1) {
                                        console.log("hi");
                                        return (
                                            <Grid container className="AdCell" padding={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                                {Array.from(Array(6)).map(function (_, _id) {
                                                    console.log("Hi");
                                                    a = a + 1;
                                                    return (
                                                        <Grid className="AdCell" item xs={6}>
                                                            <Item style={{ backgroundColor: "black" }}>
                                                                <Container className="AdCell">
                                                                    <TableComponent a={a} />
                                                                </Container>
                                                            </Item>
                                                        </Grid>
                                                    );
                                                })
                                                }
                                            </Grid>
                                        );
                                    })
                                    }
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>

                    {/* <Grid container padding ={0} rowSpacing={0} columnSpacing={{ xs: 0 }} justifyContent="center" justifyItems="center" direction="column">
                        {Array.from(Array(4)).map(function (_, _id1) {
                            console.log("hi");
                            return (
                                <Grid container padding ={0} rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                                    {Array.from(Array(9)).map(function (_, _id) {
                                        console.log("Hi");
                                        a = a + 1;
                                        return (
                                            <Grid item xs={4}>
                                                <Item style={{ backgroundColor: "black" }}>
                                                    <Container className="AdCell">
                                                        <TableComponent a={a} />
                                                    </Container>
                                                </Item>
                                            </Grid>
                                        );
                                    })
                                    }
                                </Grid>
                            );
                        })
                        }
                    </Grid> */}

                    {//InnerMost 9 Thing Grid
                    /* <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                        {Array.from(Array(9)).map(function (_, _id) {
                            console.log("Hi");
                            a = a + 1;
                            return (
                                <Grid item xs={4}>
                                    <Item>{a}</Item>
                                </Grid>
                            );
                        })
                        }
                    </Grid> */}

                </Box>
            </Container>

            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 0 }} columns={{ xs: 3 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item colSpacing={{ xs: 1 }}
                        justifyContent="space-evenly" >
                        <Item>
                            <div style={{
                                width: 150,
                                padding: 0,
                                spacing: 12,
                            }} >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxCorner" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div style={{ width: 500, justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(9)).map((_, c_index) => (
                                            <Col className="box" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>

                        </Item>
                        <Item>
                            <Iframe url="https://www.youtube.com/embed/ZVOGPvo08zM"
                                width="500vw"
                                height="300remw"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative" />
                        </Item>
                        <Item>
                            <div >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(9)).map((_, c_index) => (
                                            <Col className="box" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item>
                        <Item>
                            <div style={{
                                width: 150,
                                padding: 0,
                                spacing: 12,
                            }} >
                                {Array.from(Array(3)).map((_, r_index) => (
                                    <Row>
                                        {Array.from(Array(3)).map((_, c_index) => (
                                            <Col className="boxCorner" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
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
                                            <Col className="boxVerticals" style={{
                                                backgroundColor: 'Black',
                                            }}>
                                                <TableComponent a={a} />
                                                {a = a + 1}
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box> */}
        </Container>
    )
}

export default Sample3
