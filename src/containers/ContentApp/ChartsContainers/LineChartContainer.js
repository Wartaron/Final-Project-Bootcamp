import React, { Component } from 'react';
import Chart from 'react-google-charts';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {filterData, filterOnlyTheColumnsNeeded,
        parseFloatArray, deleteRow, trasposeArray} from './FilterData';

const options = {
  title: "Sales",
  legend: { position: "bottom" }
};
class LineChartData extends React.Component {

    verifyRenderChart(){
        if (this.props.data.length === 0) {
            return (
                <div class="p-3 mb-2 bg-danger text-white">
                    Please Charge the info
                </div>
            );
        }else if (
                    this.props.selectedData.factSelected === '' ||
                    this.props.selectedData.marketSelected === '' ||
                    this.props.selectedData.categorySelected === ''
                 ) {
             return (
                 <div class="p-3 mb-2 bg-warning text-dark">
                     Please select the info for the graph
                 </div>
             );
        }else {

            return (
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="700px"
                  options={options}
                  data={this.getDataToGraph()}
                />
            );
        }

    }

    getDataToGraph(){
        const {
            factSelected,
            marketSelected,
            categorySelected
        } = this.props.selectedData;

        var dataToGraph = [];

        if (
            !(factSelected === '' ||
            marketSelected === '' ||
            categorySelected === '')
        ) {

            dataToGraph = filterData(
                this.props.data, {
                    factSelected,
                    marketSelected,
                    categorySelected
                });

            dataToGraph = filterOnlyTheColumnsNeeded(
                dataToGraph,
                3);

            dataToGraph = parseFloatArray(dataToGraph);
            dataToGraph = deleteRow(dataToGraph,1);
            dataToGraph = trasposeArray(dataToGraph);
        }

        return dataToGraph;
    }

    render() {
        return (
            <div className="mt-4">
                {this.verifyRenderChart()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.data,
        selectedData: state.selectedData.selectedData,
    }
}

LineChartData = withRouter(connect(mapStateToProps, null)(LineChartData));

export default LineChartData;
