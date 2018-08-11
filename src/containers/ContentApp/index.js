import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadData from '../../components/loadDataComponent';
import PivotFunction from './Pivot/PivotFunction';
import * as DataActions from '../../actions/dataActions';

class ContentApp extends Component {

    DataCharge(e){
        this.props.DataActions.setData(e);
    }

    renderPivotFunction(){
        if (this.props.charged) {
            return (
                <Col>
                    <PivotFunction />
                </Col>
            );
        }else {
            return (
                <Col>
                    <LoadData onDataCharge={this.DataCharge.bind(this)}/>
                </Col>
            );
        }
    }

    render(){
        return(
            <Container>
                <Row className="mt-4">
                    {this.renderPivotFunction()}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DataActions: bindActionCreators(DataActions, dispatch)
    }
}

ContentApp = connect(mapStateToProps, mapDispatchToProps)(ContentApp);

export default ContentApp;
