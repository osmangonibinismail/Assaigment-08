


import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'blue', 'red', '#00C49F', 'decoration-teal-400', 'decoration-sky-700','#00C49F'];

const data = [
  {
    name: 'The Productive Muslim',
    uv: 180,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Atomic Habits',
    uv: 281,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Deep Work',
    uv: 328,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'The Silent Patient',
    uv: 224,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Powerful Focus',
    uv: 432,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Strategic Mindset',
    uv: 310,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Immediate action',
    uv: 1178,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dopamine Detox',
    uv: 197,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Master your emotion',
    uv: 454,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Master your emotion',
    uv: 444,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Master your emotion',
    uv: 432,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Master your emotion',
    uv: 354,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={1150}
      height={850}
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
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';

