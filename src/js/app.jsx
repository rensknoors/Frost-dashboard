import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.jsx';
import Tracker from './components/tracker.jsx';

ReactDOM.render(
  (
  <div id="time">
    <Clock />
  </div>
  ),
  document.getElementById('t-root')
);

ReactDOM.render(
  (
    <Tracker />
  ),
  document.getElementById('c-root')
);