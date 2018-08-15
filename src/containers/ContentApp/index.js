import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';

import LoadData from '../../components/loadDataComponent';
import ChartsMenu from '../../components/ChartsMenu';

import ChartData from './ChartsContainers/ChartContainer';

import PivotFunction from './Pivot/PivotFunction';
import * as DataActions from '../../actions/dataActions';
import { setLastPeriod } from '../../actions/selectedDataActions';

class ContentApp extends Component {

    DataCharge(e){
        this.props.DataActions.setData(e);
        this.props.setLastPeriod(e[0][e[0].length - 1]);
    }

    renderPivotFunction(){
        if (this.props.charged) {
            return (
                <PivotFunction />
            );
        }else {
            return (
                <LoadData onDataCharge={this.DataCharge.bind(this)}/>
            );
        }
    }

    render(){
        const renderMenu = ({match}) => {
            return(
                <div>
                    <ChartsMenu/>
                </div>
            );
        }

        const renderBarChart = ({match}) => {
            return(
                <div>
                    <ChartData chartType="ColumnChart"/>
                </div>
            );
        }

        const renderPieChart = ({match}) => {
            return(
                <div>
                    <ChartData chartType="PieChart"/>
                </div>
            );
        }

        const renderLineChart = ({match}) => {
            return(
                <div>
                    <ChartData chartType="LineChart"/>
                </div>
            );
        }

        const renderTableData = ({match}) => {
            return(
                <div>
                    <ChartData chartType="Table"/>
                </div>
            );
        }

        return(
            <Container className="mw-100 p-3">
                    <Row>
                        <Col xs="2">
                            {this.renderPivotFunction()}
                        </Col>
                        <Col xs="10">
                            <Route exact path="/index" component={renderMenu} />
                            <Route exact path='/GraphBar' component={renderBarChart} />
                            <Route exact path='/GraphPie' component={renderPieChart} />
                            <Route exact path='/GraphLine' component={renderLineChart} />
                            <Route exact path='/GraphTable' component={renderTableData} />
                        </Col>
                    </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.data,
        lastPeriod: state.selectedData.selectedData.lastPeriod,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DataActions: bindActionCreators(DataActions, dispatch),
        setLastPeriod: bindActionCreators(setLastPeriod, dispatch),
    }
}

ContentApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentApp));

export default ContentApp;
