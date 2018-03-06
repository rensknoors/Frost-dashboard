import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const cmc = 'https://api.coinmarketcap.com/v1/ticker/';

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isPositive: false,
      currencies: []
    };
  }

  componentDidMount () {
    axios.get(cmc)
      .then(res => {
        const currencies = res.data;
        this.setState({ currencies });
      })
  }

  checkPriceChange (gains) {
    if (gains >= 0) {
      return " price-up";
    } else {
      return " price-down";
    }
  }

  render() {
    return (
      <div className="ticker-container">
        { this.state.currencies.slice(0, 10).map(coin => 
            (
              <div className="ticker" key={coin.id}>
                <div className="rank">{coin.rank}</div>
                <div className={"coin-info" + this.checkPriceChange(coin.percent_change_24h)}>
                  <div className="coin-name">
                    <img src={"img/icons/svg/color/" + coin.symbol + ".svg"} alt={coin.name} className="coin-icon" />
                    <span>{coin.name} <small className="sub-text">({coin.symbol})</small></span>
                  </div>
                  <div className="coin-value">
                    <span className="coin-price">
                      {"$" + Number(coin.price_usd).toFixed(2)}
                    </span>
                    <span className="coin-price-change">
                      {Number(coin.percent_change_24h).toFixed(2)+"%"}
                    </span>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    )
  }
}