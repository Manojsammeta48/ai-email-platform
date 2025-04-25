import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Campaign 1', opens: 400, clicks: 240 },
  { name: 'Campaign 2', opens: 300, clicks: 139 },
  { name: 'Campaign 3', opens: 200, clicks: 980 },
];

export const Dashboard = () => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Email Campaign Performance</h2>
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="opens" fill="#8884d8" />
      <Bar dataKey="clicks" fill="#82ca9d" />
    </BarChart>
  </div>
);
