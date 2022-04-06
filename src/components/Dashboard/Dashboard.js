import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart,Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
      {
          "month": "Mar",
          "investment": 100000,
          "sell": 241,
          "revenue": 10401
      },
      {
          "month": "Apr",
          "investment": 200000,
          "sell": 423,
          "revenue": 24500
      },
      {
          "month": "May",
          "investment": 500000,
          "sell": 726,
          "revenue": 67010
      },
      {
          "month": "Jun",
          "investment": 500000,
          "sell": 529,
          "revenue": 40405
      },
      {
          "month": "Jul",
          "investment": 600000,
          "sell": 601,
          "revenue": 50900
      },
      {
          "month": "Aug",
          "investment": 700000,
          "sell": 670,
          "revenue": 61000
      }
  ]

      
    return (
        <Container>
            <Row>
                <Col className='lg-6 mt-5'>
                  <h2>investment...</h2>
                    <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip></Tooltip>
                    <YAxis />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </Col>
            </Row>
            <Row className='mt-5 mb-5'>
              <Col>
                <h2>Seller Cheart</h2>
                <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <Line dataKey={'month'}></Line>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <Tooltip></Tooltip>
                <YAxis></YAxis> 
                </LineChart>
              </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;