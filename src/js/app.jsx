import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.jsx';
import Tracker from './components/tracker.jsx';

ReactDOM.render(
  (
  <div id="time">
    <Clock name="Rens" />
    <Tracker />
  </div>
  ),
  document.getElementById('root')
);