

import React from 'react';
import '../AboutTeam.css';

function AboutTeam() {
  return (
    <section className="about-team">
      <div className="overlay"></div>
      <div className="content-wrapper">
        <div className="about-content">
          <h2>ABOUT LUFDA</h2>
          <p class="about-p">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia Even the all-powerful Pointing has no
            control about the blind texts it is an almost unorthographic life One
            day however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
         
          <button href ="#about" className="btn btn-primary">LEARN MORE</button>  {/* We need to link the read more to the about page */}
        </div>
        <div className="player-image">
          <img src="static/img/team.jpg" alt="Lufda player" />
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;