import React from 'react';
import ReactDOM from 'react-dom';

const cmc = 'https://api.coinmarketcap.com/v1/ticker/';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount () {
  
  }

  render () {
    return (
      <p></p>
    )
  }
}