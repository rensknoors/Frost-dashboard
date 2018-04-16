import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock.jsx';
import CoinList from './components/coinList.jsx';
import MarketInfo from './components/marketInfo.jsx';
import SearchBar from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchTerm: null
    };
  }

  filterCryto = (filter) => {
    this.setState({searchTerm: filter});
  }

  
  
  render () {
    return (
      <div className="container">
        <div className="crypto panel">
          <div id="select-mode">
              <div className="mode marketcap" title="marketcap"></div>
              <div className="mode watchlist" title="watchlist"></div>
              <div className="mode news" title="news"></div>
          </div>
  
          <div id="market-info">
            <MarketInfo />
          </div>
  
          <div id="search">
            <SearchBar onSearchCrypto={ this.filterCryto } />
          </div>
  
          <div id="c-root">
            <CoinList searchTerm={ this.state.searchTerm } />
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