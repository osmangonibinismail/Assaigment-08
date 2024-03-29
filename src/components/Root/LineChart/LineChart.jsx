
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredBookApplication } from '../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'gray', 'red', '#00C49F', '#0088FE', '#FFBB28', 'blue'];



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


const LineChart = () => {
  const books = useLoaderData()
  const [readBooks, setReadBooks] = useState([])
  useEffect(()=>{
    const bookDetails = getStoredBookApplication()
    if (books.length > 0){
      const markBook = []
     for(const storedBook of bookDetails){
      const book = books.find(book => book.bookId === storedBook.bookId)
      if (book && storedBook.item === 'read') {
        markBook.push(book)
      }
     }
     setReadBooks(markBook);
    }
  },[books])
  return (
    <div>
      <BarChart
        width={1150}
        height={850}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  )
}
export default LineChart;


