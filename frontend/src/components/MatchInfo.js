

import React from 'react';
import '../MatchInfo.css';

function MatchInfo() {
  return (
    <section className="match-info py-5 bg-dark text-light">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2013/01/luther-LUFDA.png?x58670" alt="Phoenix" className="rounded-circle" />
            <h4 className="mt-2">LUFDA</h4>
          </div>
          <div className="col-md-4">
            <h2 className="theheader mb-3">FALL SEASON</h2>
            {/* <p className="mb-1">Opening</p> */}
            <div className="countdown d-flex justify-content-center">
              <div className="mx-3">
                <p className="display-4 mb-0">45</p>
                <p>Days</p>
              </div>
              <div className="mx-3">
                <p className="display-4 mb-0">11</p>
                <p>Hours</p>
              </div>
              <div className="mx-3">
                <p className="display-4 mb-0">49</p>
                <p>Minutes</p>
              </div>
              <div className="mx-3">
                <p className="display-4 mb-0">14</p>
                <p>Seconds</p>
              </div>
            </div>
            <a href="https://collegechampionships.usaultimate.org/team/luther-lufda/" className="btn btn-success mt-3">BUY TICKET</a>
      
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <img src="/static/img/radicals.png" alt="Opponent" className="rounded-circle" />
            <h4 className="mt-2">RADICALS</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchInfo;

