import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 2600, amt: 2600 },
  { name: "Page C", uv: 200, pv: 2600, amt: 2600 },
  { name: "Page D", uv: 800, pv: 2600, amt: 2600 },
  { name: "Page E", uv: 400, pv: 2600, amt: 2600 },
  { name: "Page F", uv: 100, pv: 2600, amt: 2600 },
];

const RenderLineChart = () => {
  return (
    <div className="mr-4">
      <LineChart
        width={600}
        height={150}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default RenderLineChart;
