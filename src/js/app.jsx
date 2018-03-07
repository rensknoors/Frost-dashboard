import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.jsx';
import Ticker from './components/ticker.jsx';
import MarketInfo from './components/marketinfo.jsx';

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
    <MarketInfo />
  ),
  document.getElementById('market-info')
);

ReactDOM.render(
  (
    <Ticker />
  ),
  document.getElementById('c-root')
);