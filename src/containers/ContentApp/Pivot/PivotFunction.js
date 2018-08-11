import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText, CardHeader
} from 'reactstrap';

import {
    Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';

import './PivotFunction.css';
import * as SelectedDataActions from '../../../actions/selectedDataActions';

class PivotFunction extends Component {

    constructor(){
        super();

        this.state = {
            fact: '',
            market: '',
            category: ''
        }
    }

    onPivotChange(e){
        e.preventDefault();

        const {id, value} = e.target;

        this.setState(prevState =>   ({
            ...prevState,
            [id]: value
        }));
        this.triggerActionsInProps();
    }

    triggerActionsInProps(){
        this.props.SelectedDataActions.setFactSelected(this.state.fact);
        this.props.SelectedDataActions.setCategorySelected(this.state.category);
        this.props.SelectedDataActions.setMarketSelected(this.state.market);

    }

    renderFooter(){
        return(
            <CardFooter className="text-left">
                <CardText>
                    Fact: {this.state.fact} <br/>
                    Market: {this.state.market}<br/>
                    Category: {this.state.category}<br/>
                </CardText>
            </CardFooter>
        );
    }

    render(){
        return(
            <Card>
                <CardHeader>
                    <CardTitle>
                        Select your data for the next pivots
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <form className="form">
                        <select
                            type="text"
                            id="fact"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                            <option></option>
                            <option>Danilo</option>
                        </select>
                        <select
                            type="text"
                            id="market"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                            <option></option>
                            <option>Danilo</option>
                        </select>
                        <select
                            type="text"
                            id="category"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                            <option></option>
                            <option>Danilo</option>
                        </select>
                    </form>
                </CardBody>
                {this.renderFooter()}

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedData: state.selectedData.selectedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SelectedDataActions: bindActionCreators(SelectedDataActions, dispatch),
    }
}

PivotFunction = connect(mapStateToProps, mapDispatchToProps)(PivotFunction);

export default PivotFunction;
