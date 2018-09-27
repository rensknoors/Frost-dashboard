import React from "react";
import NumberFormat from "react-number-format";

export default class Ticker extends React.Component {
  constructor(props) {
    super(props);
  }

  defaultImg = e => {
    e.target.src = "img/icons/svg/color/_unknown.svg";
  };

  formatPercentage(percentage) {
    if (percentage >= 0) {
      return "+";
    }
  }

  chooseIcon(percentage) {
    if (percentage >= 0) {
      return (
        <path
          fill="#00ff00"
          d="M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z"
        />
      );
    } else {
      return (
        <path
          fill="#ff0000"
          d="M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z"
        />
      );
    }
  }

  render() {
    return (
      <div className="ticker">
        <div className="rank">{this.props.rank}</div>

        <div className="coin-info">
          <div className="coin-name">
            <img
              src={"img/icons/svg/color/" + this.props.symbol + ".svg"}
              alt={this.props.name}
              className="coin-icon"
              onError={this.defaultImg}
            />
            <span>{this.props.name}</span>
            <small className="sub-text">{this.props.symbol}</small>
          </div>

          <div className="coin-value">
            <NumberFormat
              value={this.props.price_usd}
              displayType={"text"}
              prefix={"$"}
              isNumericString={true}
              decimalScale={2}
              decimalSeparator={","}
              fixedDecimal={true}
              thousandSeparator={"."}
              renderText={value => <span className="coin-price">{value}</span>}
            />

            <NumberFormat
              value={this.props.percent_change_24h}
              prefix={this.formatPercentage(this.props.percent_change_24h)}
              suffix={"%"}
              displayType={"text"}
              isNumericString={true}
              decimalScale={2}
              decimalSeparator={","}
              fixedDecimal={true}
              renderText={value => (
                <span className="coin-price-change">{value}</span>
              )}
            />

            <svg
              className="price-change-icon"
              style={{ width: "24px", height: "24px" }}
              viewBox="0 0 24 24"
            >
              {this.chooseIcon(this.props.percent_change_24h)}
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
