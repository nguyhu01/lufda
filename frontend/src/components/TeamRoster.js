

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../TeamRoster.css';

const players = [
  { name: 'Simon McDonald', position: 'Captain/Cutter', image: '/static/img/simon.jpg' },
  { name: 'David Scott', position: 'Pitcher', image: '/static/img/simon.jpg' },
  { name: 'John Doe', position: 'First Baseman', image: '/static/img/huy.jpg' },
  { name: 'Jane Smith', position: 'Second Baseman', image: '/static/img/griff.jpg' },
  { name: 'Mike Johnson', position: 'Third Baseman', image: '/static/img/sky.jpg' },
  { name: 'Emily Brown', position: 'Shortstop', image: '/static/img/simon.jpg' },
  { name: 'Alex Lee', position: 'Outfielder', image: '/static/img/griff.jpg' },
  { name: 'Sarah Wilson', position: 'Catcher', image: '/static/img/sky.jpg' },
  { name: 'Tom Harris', position: 'Designated Hitter', image: '/static/img/simon.jpg' },
  { name: 'Lucy Chen', position: 'Relief Pitcher', image: '/static/img/regionals_2024.jpg' },
];

function TeamRoster() {
  const renderPlayer = (player) => (
    <Col xs={6} sm={4} md={2} lg={2} className="mb-4">
      <div className="player-item">
        <img src={player.image} alt={player.name} className="player-image" />
        <h4>{player.name}</h4>
        <p>{player.position}</p>
      </div>
    </Col>
  );

  const carouselItems = [];
  for (let i = 0; i < players.length; i += 5) {
    carouselItems.push(
      <Carousel.Item key={i}>
        <Row className="justify-content-center">
          {players.slice(i, i + 5).map((player, index) => renderPlayer(player))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <section className="team-roster">
      <Container fluid className="roster-content text-center">
        <h2>TEAM SQUAD</h2>
        <h3>OUR TEAM <span className="highlight">SQUAD</span></h3>
        <p className="mx-auto">Introducing the Luf-Lovers: x Players + 2 Captains</p>
        <Carousel id="teamRosterCarousel" className="team-roster-carousel">
          {carouselItems}
        </Carousel>
      </Container>
    </section>
  );
}

export default TeamRoster;