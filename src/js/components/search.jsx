import React, { PropTypes } from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  getSearchTerm = e => {
    var searchTerm = e.target.value;
    this.props.onSearchCrypto(searchTerm);
  };

  render() {
    return (
      <input
        tabIndex="0"
        type="text"
        className="crypto-search"
        placeholder="Search cryptocurrency, symbol or rank"
        onChange={this.getSearchTerm}
      />
    );
  }
}
