import React from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from 'react-number-format';
import axios from 'axios';

const cmc = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currencies: []
    };
  }

  componentDidMount () {
    axios.get(cmc)
      .then(res => {
        const currencies = res.data;
        this.setState({ currencies });
      });
  }

  formatPercentage (percentage) {
    if (percentage >= 0) {
      return "+";
    }
  }

  chooseIcon (percentage) {
    if (percentage >= 0) {
    return (<path fill="#00ff00" d="M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z" />);
    } else {
    return (<path fill="#ff0000" d="M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z" />);
    }
  }

  render() {
    return (
      <div className="ticker-container">
        { this.state.currencies.map(coin => 
            (
              <div className="ticker" key={ coin.id }>
                <div className="rank">{ coin.rank }</div>
                <div className="coin-info">

                  <div className="coin-name">
                    <img src={ "img/icons/svg/color/" + coin.symbol + ".svg" } alt={ coin.name } className="coin-icon" />
                    <span>{ coin.name }</span>
                    <small className="sub-text">{ coin.symbol }</small>
                  </div>

                  <div className="coin-value">

                      <NumberFormat value={coin.price_usd} displayType={'text'} prefix={'$'} isNumericString={true} decimalScale={2} decimalSeparator={','} thousandSeparator={'.'} renderText={value => <span className="coin-price">{value}</span>} />
                      <NumberFormat value={coin.percent_change_24h} prefix={this.formatPercentage(coin.percent_change_24h)} suffix={'%'} displayType={'text'} isNumericString={true} decimalScale={2} decimalSeparator={','} renderText={value => <span className="coin-price-change">{value}</span>} />
                      <svg className="price-change-icon" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                        {this.chooseIcon(coin.percent_change_24h)}
                      </svg>

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