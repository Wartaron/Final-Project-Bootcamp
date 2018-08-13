import React, { Component } from 'react';
import {
  Card, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import CSVReader from 'react-csv-reader';

class LoadData extends Component {

    constructor(){
        super();

        this.readCSV = this.readCSV.bind(this);
    }

    readCSV(e){
        this.props.onDataCharge(e);
    }

    render(){
        return(
            <Card>
                <CardBody>
                    <CardTitle>Please select the data</CardTitle>
                    <CardText>
                        <CSVReader
                            id="csvreader"
                            onFileLoaded={this.readCSV}/>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default LoadData;
