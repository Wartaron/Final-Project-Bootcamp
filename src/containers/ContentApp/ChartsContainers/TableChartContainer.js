import React, { Component } from 'react';
import Chart from 'react-google-charts';

const data = [
  ["Name", "Salary", "Full time employee"],
  ["Mike", { v: 10000, f: "$10,000" }, true],
  ["Jim", { v: 8000, f: "$8,000" }, false],
  ["Alice", { v: 12500, f: "$12,500" }, true],
  ["Bob", { v: 7000, f: "$7,000" }, true]
];
const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
class TableChartData extends React.Component {
  render() {
    return (
      <div>
        <Chart
          chartType="Table"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default TableChartData;
