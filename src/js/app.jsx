import React from 'react';
import ReactDOM from 'react-dom';
// import NumberFormat from 'react-number-format';

import Clock from './components/clock.jsx';
import Ticker from './components/ticker.jsx';
import MarketInfo from './components/marketinfo.jsx';
import SearchBar from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  filterCryto (searchTerm) {
    console.log(searchTerm);
  }

  render () {
    return (
      <div className="container">
        <div className="crypto panel">
          <div id="select-mode">
              <div className="mode marketcap"></div>
              <div className="mode portfolio"></div>
              <div className="mode news"></div>
          </div>
  
          <div id="market-info">
            <MarketInfo />
          </div>
  
          <div id="search">
            <SearchBar onSearchCrypto={ this.filterCryto } />
          </div>
  
          <div id="c-root">
            <Ticker />
          </div>
        </div>
  
        <div className="time panel" id="t-root">
          <div id="time">
            <Clock />
          </div>
        </div>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);