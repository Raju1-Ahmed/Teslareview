import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart,Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
          "review": "Review A",
          "rr": 4000,
          "rtr": 2400
        },
        {
          "review": "Review B",
          "rr": 3000,
          "rtr": 1398
        },
        {
          "review": "Review C",
          "rr": 2000,
          "rtr": 9800
        },
        {
          "review": "Review D",
          "rr": 2780,
          "rtr": 3908
        },
        {
          "review": "Review E",
          "rr": 1890,
          "rtr": 4800
        },
        {
          "review": "Review F",
          "r": 2390,
          "rtr": 3800
        },
        {
          "review": "Review G",
          "rr": 3490,
          "rtr": 4300
        }
      ]
      
    return (
        <Container>
            <Row>
                <Col className='lg-6 mt-5'>
                    <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="review" />
                    <Tooltip></Tooltip>
                    <YAxis />
                    <Legend />
                    <Bar dataKey="rr" fill="#8884d8" />
                    <Bar dataKey="rtr" fill="#82ca9d" />
                    </BarChart>
                </Col>
            </Row>
            <Row className='mt-5 mb-5'>

  <LineChart width={500} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <Line dataKey={'review'}></Line>
    <Line dataKey={'rtr'}></Line>
    <Line dataKey={'review'}></Line>
    <Line dataKey={'rtr'}></Line>
    <Tooltip></Tooltip>
    <YAxis></YAxis> 
  </LineChart>

            </Row>
        </Container>
    );
};

export default Dashboard;