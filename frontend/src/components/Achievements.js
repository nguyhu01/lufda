import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Achievements.css';

const achievements = [
  { year: '2023', title: 'League Champions' },
  { year: '2022', title: 'State Finalists' },
  { year: '2021', title: 'Division Winners' }
];

const Achievements = () => {
  return (
    <section className="achievements-section py-5">
      <Container className="text-center">
        <h2 className="text-muted">Achievements</h2>
        <h3 className="mb-4">Recent Achievements</h3>
        <Row>
          {achievements.map((achievement, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="achievement-card text-center">
                <Card.Body>
                  <Card.Title className="achievement-year">{achievement.year}</Card.Title>
                  <Card.Subtitle className="achievement-title">{achievement.title}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;
