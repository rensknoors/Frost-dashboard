import React from "react";
import axios from "axios";

import Ticker from "./ticker.jsx";

const cmc = "https://api.coinmarketcap.com/v1/ticker/?limit=300";

export default class CoinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      currencies: [],
      filteredCurrencies: []
    };
  }

  getData() {
    axios.get(cmc).then(res => {
      const currencies = res.data;
      this.setState({ currencies });
      if (this.state.filteredCurrencies.length === 0) {
        this.setState({ filteredCurrencies: currencies });
      }
      console.log(currencies);
    });
  }

  filterResults(filter) {
    if (typeof filter !== "undefined") {
      filter.toLowerCase();
      var filteredCurrencies = this.state.currencies.filter(coin => {
        if (
          coin.name.toLowerCase().includes(filter) ||
          coin.symbol.toLowerCase().includes(filter) ||
          coin.rank === filter
        ) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({ filteredCurrencies });
    }
  }

  componentWillMount() {
    this.setState({ filteredCurrencies: this.state.currencies });
  }

  componentDidMount() {
    this.getData();
    this.cryptoUpdate = setInterval(() => this.getData(), 60000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchTerm: nextProps.searchTerm });
    this.filterResults(nextProps.searchTerm);
  }

  render() {
    return (
      <div className="ticker-container">
        {this.state.filteredCurrencies.slice(0, 100).map(coin => {
          return (
            <Ticker
              key={coin.id}
              rank={coin.rank}
              name={coin.name}
              symbol={coin.symbol}
              price_usd={coin.price_usd}
              percent_change_24h={coin.percent_change_24h}
            />
          );
        })}
      </div>
    );
  }
}
