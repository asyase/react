import React from 'react';
import { Chart } from 'react-google-charts';

function App() {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 8],
    ['Exercise', 2],
  ];

  const options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default App;

