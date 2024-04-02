import React from 'react';
import Nav from './Nav.js';
import Day1 from './Day1.js'
import Day2 from './Day2.js'
import Day3 from './Day3.js'
import Day4 from './Day4.js'
import Day5 from './Day5.js'
import './unnecessaryapp_logo1.png';
import './meal1.png';
import './meal2.png';
import './meal3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require('./unnecessaryapp_logo1.png')} className="App-logo" alt="logo" style={{'borderRadius':'170px'}}/>
        <p>
          User <b><code>SANDRA</code>-Hybrid training program</b>
          <ul><li>-Lean up</li>
          <li>-Build out Fast Twitch - A/B fiber dense muscles</li>
          <li>-Back definition; Glute Density</li></ul>
          <h4>
        <p>It is important to note that a typical "PPL"(Push-Pull-Leg) split involves being 3-4 days on and 1 day off to adequately recover between cycles. This program will be a hybrid of PPL + conditioning to cut down the time of being at the gym and creating more efficient RPE(rate of perceived exertion) training. We will do 3 days on and 1 day off and then 2 and 1 to account for the second posterior leg day to focus on growing lower body. More volume, more growth!</p></h4>
          <Nav />
        </p>
          <h2>Day 1</h2>
          <Day1 />
          <h2>Day 2</h2>
          <Day2 />
          <h2>Day 3</h2>
          <Day3 />
          <h2>Rest Day</h2>
          <p>Enjoy your day</p>
          <h2>Day 4</h2>
          <Day4 />
          <h2>Day 5</h2>
          <Day5 />
          <h2>Rest Day</h2>
          <p>Enjoy your day</p>
        <a
          className="App-link"
          href="http://www.instagram.com/unnecessaryapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          keonecra@hellointernet.ca
        </a>
      </header>
      <main></main>
    </div>
  );
}

export default App;
