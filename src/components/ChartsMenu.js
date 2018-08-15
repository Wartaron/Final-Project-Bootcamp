import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText, CardHeader
} from 'reactstrap';

import barChartImg from '../imgs/BarChart.png'
import pieChartImg from '../imgs/PieChart.png'
import lineChartImg from '../imgs/LineChart.png'
import tableDataImg from '../imgs/TableData.png'

import './css/index.css';

class ChartsMenu extends Component {
    render(){
        return(
            <Container className="mw-100 mt-4">
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Link to="/GraphBar"><h3>Bar Chart</h3></Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <img src={barChartImg} className="max-width-75" alt="Bar Chart"/>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <p>A bar graph is a visual representation of the data that the user has previously loaded in a horizontal way,
                                    which allows him to know in which iteration he had a greater growth.</p>
                                </CardText>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Link to="/GraphPie"><h3>Pie Chart</h3></Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <img src={pieChartImg} className="max-width-75" alt="Pie Chart"/>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <p>A pie chart is a visual representation of the data that the user previously
                                    charged in a circular manner that lets you see how much weight had a category</p>
                                </CardText>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Link to="/GraphLine"><h3>Line Chart</h3></Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <img src={lineChartImg} className="max-width-75" alt="Line Chart"/>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <p>A line graph is a visual representation that allows you to see how much
                                    growth or decrease a category had during a certain period of time</p>
                                </CardText>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Link to="/GraphTable"><h3>Table Data</h3></Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <img src={tableDataImg} className="max-width-75" alt="Data Table"/>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <p>A data table allows you to see the absolute data of all the loaded information</p>
                                </CardText>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChartsMenu;
