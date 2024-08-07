

import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../GameSchedule.css';

function GameSchedule() {
  const games = [
    { date: 'JUNE 7, 2018', homeTeam: 'LUFDA', awayTeam: 'CHOP' },
    { date: 'JUNE 7, 2018', homeTeam: 'LUFDA', awayTeam: 'CUT' },
    { date: 'JUNE 7, 2018', homeTeam: 'LUFDA', awayTeam: 'CONCORDIA' },
    { date: 'JUNE 7, 2018', homeTeam: 'LUFDA', awayTeam: 'ST.JOHN' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderGame = (game) => (
    <Col md={6} className="mb-4">
      <div className="match-card p-3 border rounded">
        <p>HOME @ ARENA - {game.date}</p>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <img src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2013/01/luther-LUFDA.png?x58670" alt={game.homeTeam} className="rounded-circle" />
            <p className="team-name mt-2">{game.homeTeam}</p>
          </div>
          <p className="vs mx-3 font-weight-bold">vs</p>
          <div>
            <img src="/static/img/radicals.png" alt={game.awayTeam} className="rounded-circle" />
            <p className="team-name mt-2">{game.awayTeam}</p>
          </div>
        </div>
      </div>
    </Col>
  );

  const carouselItems = games.reduce((acc, game, index) => {
    if (index % 2 === 0) {
      acc.push(
        <Carousel.Item key={index}>
          <Row>
            {renderGame(game)}
            {games[index + 1] && renderGame(games[index + 1])}
          </Row>
        </Carousel.Item>
      );
    }
    return acc;
  }, []);

  return (
    <section className="game-schedule py-5">
      <Container className="text-center">
        <h2 className="text-muted">Luf-Schedule</h2>
        <h3 className="mb-4">Game Schedule</h3>
        <Carousel id="gameScheduleCarousel" className="game-schedule-carousel" onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
            {carouselItems}
        </Carousel>
        <div className="carousel-page-indicator mt-3"> {carouselItems.map((_, index) => (
            <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></span>
        ))}
        </div>
      </Container>
    </section>
  );
}

export default GameSchedule;