"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   {
//     name: "Jan",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Feb",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Mar",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Apr",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "May",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Jun",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Jul",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Aug",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Sep",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Oct",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Nov",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
//   {
//     name: "Dec",
//     total: Math.floor(Math.random() * 5) + 5,
//   },
// ]


const data = [
  {
    name: 'Monday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2400,
  },


  {
    name: 'Tuesday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2290,
  },
  {
    name: 'Thursday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2000,
  },
  {
    name: 'Friday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2181,
  },
  {
    name: 'Saturday',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2500,
  },
  {
    name: 'Today',
    reddit: Math.floor(Math.random() * 5) + .5,
    twitter: Math.floor(Math.random() * 5) + .5,
    amt: 2100,
  },
];

export function Overview() {
  return (
    // <div className="w-full bg-black relative">

    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="twitter" stroke="blue" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="reddit" stroke="orange" />
      </LineChart>
    </ResponsiveContainer>



    // </div>


  )
}
