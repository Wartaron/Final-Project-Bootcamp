import React, { Component } from 'react';
import Chart from 'react-google-charts';

const data = [
  ["Element", "Density"],
  ["Copper", 8.94], // RGB value
  ["Silver", 10.49], // English color name
  ["Gold", 19.3],
  ["Platinum", 21.45] // CSS-style declaration
];

class BarChartData extends Component {
    render() {
        return (
            <div className="mt-4">
                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="400px"
                  data={data}
                />
            </div>
        );
    }
}

export default BarChartData;
