import React, { Component } from 'react';
import {
  Card, CardFooter, CardBody,
  CardTitle, CardText, CardHeader
} from 'reactstrap';

import {
    Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';

import './PivotFunction.css';

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
                    Select your data for the next pivots
                </CardHeader>
                <CardBody className="mt-4">
                    <form className="form">
                        <select
                            type="text"
                            id="fact"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                        </select>
                        <select
                            type="text"
                            id="market"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                        </select>
                        <select
                            type="text"
                            id="Category"
                            className="form-control"
                            onChange={this.onPivotChange.bind(this)}>
                        </select>
                    </form>
                </CardBody>
                {this.renderFooter()}

            </Card>
        );
    }
}

export default PivotFunction;
