

import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../TeamRoster.css';
import { firestore } from '../firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

  const TeamRoster = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      const fetchPlayers = async () => {
        const playersCollection = collection(firestore, 'players');  
        const playerSnapshot = await getDocs(playersCollection);
        const playerList = playerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPlayers(playerList);
      };

      fetchPlayers();
    }, []);

    const addPlayer = async (newPlayer) => {
      try {
        await addDoc(collection(firestore, 'players'), newPlayer);
      } catch (error) {
        console.error("Error adding player: ", error);
      }
    };
    
    const removePlayer = async (playerId) => {
      try {
        await deleteDoc(doc(firestore, 'players', playerId));
      } catch (error) {
        console.error("Error removing player: ", error);
      }
    };

    const renderPlayer = (player) => (
      <Col xs={6} sm={4} md={2} lg={2} className="mb-4" key={player.id}>
        <div className="player-item">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
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
        <h2>TEAM <span className="highlight">SQUAD</span></h2>
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