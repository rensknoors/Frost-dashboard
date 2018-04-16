import React from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

const cmc = 'https://api.coinmarketcap.com/v1/global/';

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      marketcap: []
    };
  }

  componentDidMount () {
    axios.get(cmc)
      .then(res => {
        const marketcap = res.data;
        this.setState({ marketcap });
      });
  }

  render() {
    return (
      <p>
        <span>Market Cap:
        <NumberFormat className="bold" value={this.state.marketcap.total_market_cap_usd} displayType={'text'} prefix={' $'} isNumericString={true} decimalScale={2} decimalSeparator={','} thousandSeparator={'.'} />
        </span>
        <span>BTC dominance:
        <NumberFormat className="bold" value={this.state.marketcap.bitcoin_percentage_of_market_cap} prefix={' '} suffix={'%'} displayType={'text'} isNumericString={true} decimalScale={1} decimalSeparator={','} />
        </span> 
      </p>
    )
  }
}