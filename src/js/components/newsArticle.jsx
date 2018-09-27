import React from "react";

export default class News extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="article-container">
        <a href={this.props.url}>
          <div className="article">
            <div className="article-image-container">
              <img className="article-image" src={this.props.image} alt="" />
            </div>
            <div className="article-info">
              <p className="article-title">{this.props.title}</p>
              <p className="article-description">{this.props.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
