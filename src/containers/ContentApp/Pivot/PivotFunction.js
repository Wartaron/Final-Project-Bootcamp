import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText, CardHeader
} from 'reactstrap';

import './PivotFunction.css';
import * as SelectedDataActions from '../../../actions/selectedDataActions';
import {filterData} from './FilterOptions'

class PivotFunction extends Component {

    onPivotChange(e){
        e.preventDefault();

        const {id, value} = e.target;

        this.triggerActionsInProps(id, value);

    }

    triggerActionsInProps(id, value){
        switch (id) {
            case 'fact':
                this.props.SelectedDataActions.setFactSelected(value);
                break;
            case 'market':
                this.props.SelectedDataActions.setMarketSelected(value);
                break;
            case 'category':
                this.props.SelectedDataActions.setCategorySelected(value);
                break;
            default:

        }

    }

    renderFooter(){
        return(
            <CardFooter className="text-left">
                <CardText>
                    Fact: {this.props.selectedData.factSelected}    <br/>
                    Market: {this.props.selectedData.marketSelected}    <br/>
                    Category: {this.props.selectedData.categorySelected}    <br/>
                </CardText>
            </CardFooter>
        );
    }

    getOptions(id = ''){
        var filterOptions = [];
        var optionsToRender = [];

        switch (id) {
            case 'fact':
                filterOptions = filterData(this.props.data, 0);
                break;

            case 'market':
                filterOptions = filterData(this.props.data, 1);
                break;

            case 'category':
                filterOptions = filterData(this.props.data, 2);
                break;

            default:
                filterOptions.push('');
        }

        optionsToRender = filterOptions.map((data, i) => {
            return(
                <option key={i}> {data} </option>
            );
        });

        return optionsToRender;
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
                            {this.getOptions('fact')}
                        </select>
                        <select
                            type="text"
                            id="market"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                            {this.getOptions('market')}
                        </select>
                        <select
                            type="text"
                            id="category"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                            {this.getOptions('category')}
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
        selectedData: {
            factSelected: state.selectedData.selectedData.factSelected,
            marketSelected: state.selectedData.selectedData.marketSelected,
            categorySelected: state.selectedData.selectedData.categorySelected
        },
        data: state.data.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SelectedDataActions: bindActionCreators(SelectedDataActions, dispatch),
    }
}

PivotFunction = connect(mapStateToProps, mapDispatchToProps)(PivotFunction);

export default PivotFunction;
