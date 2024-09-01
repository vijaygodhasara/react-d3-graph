// src/App.tsx
import React, { useState } from 'react';
import BarChart from './BarChart';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './App.css';

interface DataPoint {
  name: string;
  value: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([
    { name: 'A', value: 30 },
    { name: 'B', value: 80 },
    { name: 'C', value: 45 },
    { name: 'D', value: 60 },
    { name: 'E', value: 20 },
  ]);

  const updateData = () => {
    setData(data.map(d => ({
      ...d,
      value: Math.floor(Math.random() * 100),
    })));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="mb-4">React + D3 Bar Chart</h1>
          <BarChart data={data} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary" onClick={updateData}>Update Data</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;