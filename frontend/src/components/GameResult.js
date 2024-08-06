import React from 'react';
import '../GameResult.css';

function GameResult() {
  return (
    <section className="game-result py-5">
      <div className="container text-center">
        <h2 className="text-muted">Game Report</h2>
        <h3 className="mb-4">Latest Game Result</h3>
        <div className="row align-items-center mb-4">
          <div className="col-md-4">
            <div className="team-result">
              <img src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2013/01/luther-LUFDA.png?x58670" alt="Lufda" className="rounded-circle mb-2" />
              <div>
                <p className="team-name font-weight-bold fw-bold">LUFDA</p>
                <b className="score display-4 text-success fw-bold">12</b>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="vs font-weight-bold">vs</p>
          </div>
          <div className="col-md-4">
            <div className="team-result">
              <img src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2014/03/Carleton-College-O.png?x58670" alt="Cut" className="rounded-circle mb-2" />
              <div>
                <p className="team-name font-weight-bold fw-bold">CUT</p>
                <b className="score display-4 text-primary fw-bold">8</b>
              </div>
            </div>
          </div>
        </div>
        <p className="game-details text-muted mb-4">College D-III Regionals</p>

      </div>
    </section>
  );
}

export default GameResult;
