

import React from 'react';
import '../Home.css';
import MatchInfo from './MatchInfo';
import GameResult from './GameResult';
import GameSchedule from './GameSchedule';
import AboutTeam from './AboutTeam';
import TeamRoster from './TeamRoster';
import Achievements from './Achievements';
// import LoginForm from './LoginForm';
import Footer from './Footer';
function Home() {
  return (
    <>
      
      <section className="hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1>Luther Ultimate Flying Disc Association</h1>
          <p>A D-III College Ultimate Frisbee Club at Luther College.</p>
          <div>
            <button className="btn btn-primary m-2">Watch match</button>
            <button className="btn btn-success m-2">Join Us</button>
          </div>
        </div>
      </section>
      <MatchInfo />
      <GameResult />
      <AboutTeam />
      <GameSchedule />
      {/* <LoginForm /> */}
      <TeamRoster />
      <Achievements />
      <Footer />
      
    </>
  );
}

export default Home;
