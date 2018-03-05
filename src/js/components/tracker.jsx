import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const cmc = 'https://api.coinmarketcap.com/v1/ticker/';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currencies: []
    };
  }

  componentDidMount() {
    axios.get(cmc)
      .then(res => {
        const currencies = res.data;
        this.setState({ currencies });
      })
  }

  render() {
    return (
      <div class="ticker-container">
        { this.state.currencies.slice(0, 10).map(coin => 
            (
              <div class="ticker">
                <div class="rank">{coin.rank}</div>
                <img src={"img/icons/svg/color/"+ coin.symbol+".svg"} alt={coin.name} class="crypto-icon" />
                <div class="coin-name">{coin.name} <small class="sub-text">({coin.symbol})</small></div>
                <div class="coin-val">{coin.price_usd}</div>
              </div>
            )
          )
        }
      </div>
    )
  }
}