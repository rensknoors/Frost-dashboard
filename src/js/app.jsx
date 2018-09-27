import React from "react";
import ReactDOM from "react-dom";

import Clock from "./components/clock.jsx";
import CoinList from "./components/coinList.jsx";
import MarketInfo from "./components/marketInfo.jsx";
import SearchBar from "./components/search.jsx";
import WatchList from "./components/watchlist.jsx";
import News from "./components/news.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cRootContent: "marketcap"
    };
  }

  componentWillMount() {}

  handleClick = mode => {
    this.setState({
      cRootContent: mode
    });
  };

  filterCryto = filter => {
    this.setState({ searchTerm: filter });
  };

  render() {
    return (
      <div className="container">
        <div className="crypto panel">
          <div id="select-mode">
            <div
              className="mode marketcap"
              title="Marketcap"
              onClick={() => this.handleClick("marketcap")}
            />
            <div
              className="mode watchlist"
              title="Watchlist"
              onClick={() => this.handleClick("watchlist")}
            />
            <div
              className="mode news"
              title="Latest crypto news"
              onClick={() => this.handleClick("news")}
            />
          </div>

          <div id="market-info">
            <MarketInfo />
          </div>

          <div id="search">
            {this.state.cRootContent == "marketcap" ? (
              <SearchBar onSearchCrypto={this.filterCryto} />
            ) : null}
            {this.state.cRootContent == "news" ? (
              <h3>Latest Crypto News</h3>
            ) : null}
          </div>

          <div id="c-root">
            {this.state.cRootContent == "marketcap" ? (
              <CoinList searchTerm={this.state.searchTerm} />
            ) : null}
            {this.state.cRootContent == "watchlist" ? <WatchList /> : null}
            {this.state.cRootContent == "news" ? <News /> : null}
          </div>
        </div>

        <div className="time panel" id="t-root">
          <div id="time">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
