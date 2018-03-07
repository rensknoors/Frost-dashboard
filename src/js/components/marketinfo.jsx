import React from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from 'react-number-format';
import axios from 'axios';

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
        console.log(this.state.marketcap.total_market_cap_usd);
        console.log(this.state.marketcap.bitcoin_percentage_of_market_cap);
      });
  }

  render() {
    return (
      <p>
        <span className="bold">Market Cap: </span>
        <NumberFormat value={this.state.marketcap.total_market_cap_usd} displayType={'text'} prefix={'$'} isNumericString={true} decimalScale={2} decimalSeparator={','} thousandSeparator={'.'} />
        <span className="bold">BTC dominance: </span> 
        <NumberFormat value={this.state.marketcap.bitcoin_percentage_of_market_cap} suffix={'%'} displayType={'text'} isNumericString={true} decimalScale={1} decimalSeparator={','} />
      </p>
    )
  }
}