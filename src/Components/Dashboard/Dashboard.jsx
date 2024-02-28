// Dashboard.jsx
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

export const Dashboard = () => {
  // Sample data for line chart
  const lineChartData = [
    { name: 'Jan', value: 100000 },
    { name: 'Feb', value: 105000 },
    { name: 'Mar', value: 110000 },
    { name: 'Apr', value: 115000 },
    { name: 'May', value: 120000 },
    { name: 'Jun', value: 125000 },
    { name: 'Jul', value: 130000 },
  ];

  // Sample data for pie chart
  const pieChartData = [
    { name: 'Stocks', value: 30 },
    { name: 'Bonds', value: 20 },
    { name: 'ETFs', value: 25 },
    { name: 'Cash', value: 25 },
  ];

  const COLORS = ['#ECC94B', '#48BB78', '#4299E1', '#ED64A6'];

  return (
    <Box className="dashboard">
      <Heading className="dashboard-heading" size="lg">Dashboard</Heading>
      
      <Flex className="section" justifyContent="space-between">
        <Box flex="1" mr="4">
          <Heading className="section-heading" size="md">Portfolio Summary</Heading>
          <Flex justifyContent="space-between">
            <Box>
              <Text>Total Value</Text>
              <Text fontWeight="bold">$100,000</Text>
            </Box>
            <Box>
              <Text>Today's Change</Text>
              <Text fontWeight="bold">+ $500</Text>
            </Box>
            <Box>
              <Text>Annual Return</Text>
              <Text fontWeight="bold">10%</Text>
            </Box>
          </Flex>
        </Box>
      
        <Box className="section">
          <Heading className="section-heading" size="md">Recent Transactions</Heading>
          <ul>
            <li>Transaction 1</li>
            <li>Transaction 2</li>
            <li>Transaction 3</li>
          </ul>
        </Box>
      </Flex>

      <Box className="chart-container" mb="8">
        <Heading className="section-heading" size="md">Portfolio Performance</Heading>
        <LineChart width={500} height={300} data={lineChartData}>
          <Line type="monotone" dataKey="value" stroke="#3182CE" />
        </LineChart>
      </Box>

      <Box className="chart-container">
        <Heading className="section-heading" size="md">Portfolio Allocation</Heading>
        <PieChart width={400} height={300}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Box>
    </Box>
  );
};


