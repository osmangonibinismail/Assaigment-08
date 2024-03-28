

// const LineChart = () => {
//     return (
//         <div>
//             <div>
//                 <div className="p-6 py-12 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
//                     <div className="container mx-auto">
//                         <div className="flex flex-col lg:flex-row items-center justify-between">
//                             <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
//                                 <br className="sm:hidden" />50% Off
//                             </h2>
//                             <div className="space-x-2 text-center py-2 lg:py-0">
//                                 <span>Plus free shipping! Use code:</span>
//                                 <span className="font-bold text-lg">MAMBA</span>
//                             </div>
//                             <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600">Shop Now</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </div>
//     );
// };

// export default LineChart;


import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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

