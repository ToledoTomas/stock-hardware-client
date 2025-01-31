import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 2600, amt: 2600 },
  { name: "Page C", uv: 200, pv: 2600, amt: 2600 },
  { name: "Page D", uv: 1200, pv: 2600, amt: 2600 },
  { name: "Page E", uv: 400, pv: 2600, amt: 2600 },
  { name: "Page F", uv: 100, pv: 2600, amt: 2600 },
];

const RenderBarChart = () => {
  return (
    <div>
      <BarChart
        width={600}
        height={150}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default RenderBarChart;
